import { dev } from '$app/env';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const {
		request: { method },
		url: { pathname }
	} = event;

	if (dev) {
		console.time(`${method} ${pathname}`);
	}

	const response = await resolve(event);

	if (dev) {
		console.timeEnd(`${method} ${pathname}`);
	}

	return response;
};
