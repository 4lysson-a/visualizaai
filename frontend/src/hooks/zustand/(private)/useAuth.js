import { create } from 'zustand';
import { fetchCompanysFromUser } from '@/service/company/fetch';
import { createNewCategory } from '@/service/category/create';
import deleteCategory from '@/service/category/delete';
import { categoryEnum } from '@/utils/categoryEnum';

const useAuth = create((set, get) => ({
  auth: [],
  companys: [],
  products: {},
  subscription: {},
  categories: [],

  filter: {
    category: categoryEnum.NO_CATEGORY
  },

  getFilter: () => {
    const category = get()?.categories?.items[0]?.get('name');
    set({ filter: { category } });
  },

  setFilter: filter => set(() => ({ filter })),

  setProducts: products => set(() => ({ products })),

  setAuth: auth => set(() => ({ auth })),

  setCompanys: companys => set(() => ({ companys })),

  companyById: id => {
    for (const company of get().companys) {
      if (company.id === id) {
        return company;
      }
    }

    return null;
  },

  setIsSubscriptionActive: content => {
    set(prev => ({
      ...prev,
      subscription: content
    }));
  },

  removeProduct: (company_id, product_id) => {
    set(state => {
      const companys = [...state.companys];
      for (let i = 0; i < companys.length; i++) {
        if (companys[i].id === company_id) {
          let j = 0;
          while (j < companys[i].products.length) {
            if (companys[i].products[j].id === product_id) {
              companys[i].products.splice(j, 1);
            } else {
              j++;
            }
          }
        }
      }

      return {
        ...state,
        companys
      };
    });
  },

  addNewCategory: async (getCompany, name, color) => {
    try {
      createNewCategory(getCompany, name, color).then(async category => {
        set(state => {
          const companys = state.companys.map(company => {
            if (company.id === getCompany.id) {
              company.categories.push(category);
            }

            return company;
          });

          return {
            ...state,
            companys
          };
        });
      });
    } catch (error) {
      console.error('Erro ao criar categoria:', error);
    }
  },

  removeCategory: async (company_id, userCategory) => {
    try {
      deleteCategory(userCategory).then(() => {
        set(state => {
          const companys = state.companys.map(company => {
            if (company.id === company_id) {
              company.categories = company.categories.filter(category => category.id !== userCategory.id);
            }

            return company;
          });

          const newCategory = state.categories.items.filter(category => category.id !== category.id);

          return {
            ...state,
            companys,
            categories: {
              items: newCategory,
              company_id: company_id
            }
          };
        });
      });
    } catch (error) {
      console.error('Erro ao deletar categoria:', error);
    }
  },

  addNewProduct: (company_id, product) => {
    set(state => {
      const companys = state.companys.map(company => {
        if (company.id === company_id) {
          company.products.push(product);
        }

        return company;
      });

      return {
        ...state,
        companys
      };
    });
  },

  updateProduct: (company_id, product) => {
    set(state => {
      const companys = state.companys.map(company => {
        if (company.id === company_id) {
          company.products = company.products.map(p => {
            if (p.id === product.id) {
              return product;
            }

            return p;
          });
        }

        return company;
      });

      return {
        ...state,
        companys
      };
    });
  },

  get_data_inside_company_relation: async company_id => {
    const companyById = useAuth.getState().companyById;
    const company = companyById(company_id);

    const relation = company.relation('products');
    const products = await relation.query().find();

    const categories = company.relation('categories');
    const companyCategories = await categories.query().find();

    set(state => ({
      products: {
        ...state.products,
        [company_id]: products
      },

      categories: {
        items: companyCategories,
        company_id: company_id
      },

      companys: state.companys.map(company => {
        if (company.id === company_id) {
          company.products = products || [];
          company.categories = companyCategories || [];
        }

        return company;
      })
    }));

    return products;
  },

  setUserCompanysAndProducts: async user => {
    try {
      const userCompanys = await fetchCompanysFromUser({ user });

      set(state => ({
        ...state,
        auth: user,
        companys: userCompanys
      }));

      return {
        auth: user,
        companys: userCompanys
      };
    } catch (error) {
      console.error('Erro ao buscar empresas e produtos:', error);
    }
  }
}));

export default useAuth;
