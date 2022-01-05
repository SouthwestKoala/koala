import type { RequestHandler } from '@sveltejs/kit';
import { client } from '$lib/services/sanity';
import groq from 'groq';

export const get: RequestHandler = async () => {
	const query = groq`
    {
      "posts": *[_type == "post" && !(_id in path("drafts.**")) && defined(slug.current)] {
        "body": pt::text(body[0...1]),
				image {
					...,
					asset->
				},
        publishedAt,
				"slug": slug.current,
				"tags": coalesce(tags[], []) | order(@ asc),
				"title": coalesce(linkTitle, title),
      } | order(publishedAt desc)
    }
  `;
	const queryParams = {};
	const { posts } = await client.fetch(query, queryParams);

	if (posts) {
		return {
			body: {
				posts
			}
		};
	}
};
