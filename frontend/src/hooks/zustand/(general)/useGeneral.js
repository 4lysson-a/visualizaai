import { create } from 'zustand';

const useGeneral = create(set => ({
  payModal: {
    open: true
  },
  setPayModal: payModal => set({ payModal }),
  closePayModal: () => set({ payModal: { open: false } }),

  loading: true,
  setLoading: loading => set({ loading })
}));

export default useGeneral;
