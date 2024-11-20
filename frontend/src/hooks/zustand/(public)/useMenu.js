import { create } from 'zustand';

const useMenu = create((set, get) => ({
  menu: {
    company: null,
    products: null,
    categories: null
  },

  filter: {
    category: null,
    ignoreScroll: false
  },

  getFilter: () => {
    const category = get()?.menu?.categories?.items[0]?.get('name');
    set({ filter: { category } });
  },

  setFilter: filter => set({ filter }),

  setMenu: menu => set({ menu })
}));

export default useMenu;
