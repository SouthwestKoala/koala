import { dev } from '$app/env';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const {
		request: { method },
		url: { pathname }
	} = event;

	const label = `${method} ${pathname}`;

	dev && console.time(label);

	const response = await resolve(event);

	dev && console.timeEnd(label);

	return response;
};
