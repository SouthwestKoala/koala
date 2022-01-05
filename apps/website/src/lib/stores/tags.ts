import { derived } from 'svelte/store';
import { searchParams } from '$lib/stores/searchParams';

export const tags = derived(searchParams, ($searchParams) => $searchParams.getAll('tag'));
