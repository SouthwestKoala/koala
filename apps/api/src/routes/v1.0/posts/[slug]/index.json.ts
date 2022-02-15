import type { RequestHandler } from '@sveltejs/kit';
import { getPost } from '$lib/api/posts';

export const get: RequestHandler = async ({ params }) => {
	const { post } = await getPost({ params });

	if (post) {
		return {
			status: 200,
			headers: {
				'content-type': 'application/json'
			},
			body: {
				post
			}
		};
	} else {
		return {
			status: 404
		};
	}
};
