import { create } from 'zustand';
import {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
} from 'reactflow';



// this is our useStore hook that we can use in our components to get parts of the store and call actions
const useNodeStore = create((set, get) => ({
  nodes: [],
  edges: [],
  setNodes: (obj) => set((state) => ({ nodes: [...state.nodes, obj] })),
  setEdges: (obj) => set((state) => ({ edges: [...state.edges, obj] })),
  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
  },
}));

export default useNodeStore;
