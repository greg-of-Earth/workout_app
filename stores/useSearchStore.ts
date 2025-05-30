import { create } from 'zustand';

// global store for search allows for query across multiple screens 
// makes it easy to reset or persist search state
type SearchState = {
    query: string;
    setQuery: (q: string) => void;
};

export const useSearchStore = create<SearchState>((set) => ({
    query: '',
    setQuery: (q) => set({ query: q }),
}));