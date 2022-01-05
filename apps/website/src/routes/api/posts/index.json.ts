import { api_url } from '$lib/services/api';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
	const url = api_url({ path: `posts.json` });
	const res = await fetch(url);

	if (res.ok) {
		const { posts } = await res.json();

		if (posts) {
			return {
				body: {
					posts: [
						...posts.map((post: { slug: string }) => ({
							...post,
							slug: `/posts/${post.slug}`
						}))
					]
				}
			};
		}
	}
};
