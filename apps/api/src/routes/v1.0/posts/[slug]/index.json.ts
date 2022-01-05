import type { RequestHandler } from '@sveltejs/kit';
import { client } from '$lib/services/sanity';
import groq from 'groq';

export const get: RequestHandler = async ({ params }) => {
	const { slug } = params;

	const query = groq`
    {
      "post": *[_type == "post" && !(_id in path("drafts.**")) && defined(slug.current) && slug.current == $slug][0] {
        ...,
				"description": coalesce(seo.description, pt::text(body[0...1])),
				image {
					...,
					asset->
				},
				"keywords": [title, ...seo.keywords, ...tags],
				"slug": slug.current,
      },
    }
  `;
	const queryParams = { slug };
	const { post } = await client.fetch(query, queryParams);

	if (post) {
		return {
			body: {
				post
			}
		};
	}
};
