import { dev } from '$app/env';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ request, resolve }) => {
	if (dev) {
		console.time(`${request.method} ${request.url.pathname}`);
	}

	const response = await resolve(request);

	if (dev) {
		console.timeEnd(`${request.method} ${request.url.pathname}`);
	}

	return response;
};
