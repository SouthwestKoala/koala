import { api_url } from '$lib/services/api';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
	const { slug } = params;

	const url = api_url({ path: `posts/${slug}.json` });
	const res = await fetch(url);

	if (res.ok) {
		const { post } = await res.json();

		return {
			body: {
				post: {
					...post,
					slug: `/posts/${post?.slug}`
				}
			}
		};
	} else {
		const { status } = res;

		return {
			status
		};
	}
};
