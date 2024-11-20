import { create } from 'zustand';

export const useModal = create(set => ({
  modal: null,
  setModal: modal => set(() => ({ modal }))
}));
