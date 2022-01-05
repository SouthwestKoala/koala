import { api_url } from '$lib/services/api';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
	const { slug } = params;

	const url = api_url({ path: `pages/${slug}.json` });
	const res = await fetch(url);

	if (res.ok) {
		const { page } = await res.json();

		if (page) {
			return {
				body: {
					page
				}
			};
		}
	}
};
