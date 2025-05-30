import { useEffect } from 'react';
import { useSearchStore } from '../stores/useSearchStore';


// use a debounce timer to delay the execution of the function for 500 ms
// this avoids triggring too many updates and saves memory and CPU usage while preventing slowing of the app
export function useDebouncedSearch(onSearch: (query: string) => void, delay = 500) {
    const { query } = useSearchStore();

    useEffect(() => {
        const handler = setTimeout(() => {
            onSearch(query);
        }, delay);

        return () => clearTimeout(handler);
    }, [query, onSearch, delay]);
}