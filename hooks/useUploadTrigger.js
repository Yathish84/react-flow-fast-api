import { create } from 'zustand';

const useUploadTrigger = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useUploadTrigger;