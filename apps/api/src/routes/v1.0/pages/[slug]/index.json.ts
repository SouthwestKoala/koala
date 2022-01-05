import type { RequestHandler } from '@sveltejs/kit';
import { client } from '$lib/services/sanity';
import groq from 'groq';

export const get: RequestHandler = async ({ params }) => {
	const { slug } = params;

	const query = groq`{
		"page": *[_type == "page" && !(_id in path("drafts.**")) && defined(slug.current) && slug.current == $slug][0] {
			...,
			"body": coalesce(body, []),
			"description": coalesce(seo.description, pt::text(body[0...1])),
			image {
				...,
				asset->
			},
			"keywords": [title, ...seo.keywords, ...tags],
			"slug": slug.current,
		},
	}`;
	const queryParams = { slug };

	const { page } = await client.fetch(query, queryParams)

	if (page) {
		return {
			body: {
				page
			}
		};
	}
};
