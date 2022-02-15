import type { RequestHandler } from '@sveltejs/kit';
import { getPage } from '$lib/api/pages';

export const get: RequestHandler = async ({ params }) => {
	const { page } = await getPage({ params });

	if (page) {
		return {
			status: 200,
			headers: {
				'content-type': 'application/json'
			},
			body: {
				page
			}
		};
	} else {
		return {
			status: 404
		};
	}
};
