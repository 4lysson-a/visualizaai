import { create } from 'zustand';

/**
 * @typedef {Object} CartItem
 * @property {Object} singleItem - The single item object.
 * @property {number} quantity - The quantity of the item.
 */

/**
 * @typedef {Object} Cart
 * @property {CartItem[]} items - The list of items in the cart.
 */

/**
 * @typedef {Object} CartState
 * @property {Cart} cart - The cart object.
 * @property {function(Cart): void} setCart - Function to set the cart.
 * @property {boolean} loading - Loading state.
 * @property {function(boolean): void} setLoading - Function to set the loading state.
 */

const useCart = create(set => ({
  /** @type {Cart} */
  cart: {
    items: []
  },
  /** @type {function(Cart): void} */
  setCart: cart => set({ cart }),

  /** @type {boolean} */
  loading: true,
  /** @type {function(boolean): void} */
  setLoading: loading => set({ loading })
}));

export default useCart;
