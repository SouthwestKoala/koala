import { page } from '$app/stores';
import { derived } from 'svelte/store';
import { base64url } from 'jose';

export const state = derived(page, ({ url: { pathname, searchParams } }) =>
	base64url.encode([pathname, searchParams.toString()].filter((p) => p).join('?'))
);
