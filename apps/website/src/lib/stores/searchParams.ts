import { page } from '$app/stores';
import { derived } from 'svelte/store';

export const searchParams = derived(page, ($page) => $page.url.searchParams);
