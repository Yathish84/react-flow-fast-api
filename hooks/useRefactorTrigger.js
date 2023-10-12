import { create } from 'zustand';

const useRefactorTrigger = create((set) => ({
  isOpen: false,
  nodeData: {},
  onOpen: (data) => set({ isOpen: true, nodeData: data }),
  onClose: () => set({ isOpen: false, nodeData: {} }),
}));

export default useRefactorTrigger;