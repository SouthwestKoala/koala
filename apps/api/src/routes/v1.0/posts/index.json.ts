import type { RequestHandler } from '@sveltejs/kit';
import { getPosts } from '$lib/api/posts';

export const get: RequestHandler = async ({ params }) => {
	const { posts } = await getPosts({ params });

	if (posts) {
		return {
			status: 200,
			headers: {
				'content-type': 'application/json'
			},
			body: {
				posts
			}
		};
	} else {
		return {
			status: 404
		};
	}
};
