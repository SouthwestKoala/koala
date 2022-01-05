import { dev } from '$app/env';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ request, resolve }) => {
	if (dev) {
		console.time(request.url.pathname)
	}

	const response = await resolve(request);

	if (dev) {
		console.timeEnd(request.url.pathname);
	}

	return response;
};
