import groq from 'groq';
import { client } from '$lib/services/sanity';
import type { DatasetRequest } from '$lib/api/types';

/**
 * Get a page from the dataset.
 *
 * @param slug - unique slug to match
 *
 * @returns a promise
 *
 * @example
 *
 * const { page } = await getPage({ slug: 'about' });
 */
export const getPage: DatasetRequest = async ({ params: { slug }}) => {
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

	return client.fetch(query, queryParams);
};
