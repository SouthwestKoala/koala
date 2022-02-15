import groq from 'groq';
import { client } from '$lib/services/sanity';
import type { DatasetRequest } from './types';


/**
 * Get a post from the dataset.
 *
 * @param slug - unique slug to match
 *
 * @returns a promise
 *
 * @example
 *
 * const { post } = await getPost({ slug: 'first-post' });
 */
export const getPost: DatasetRequest = async ({ params: { slug } }) => {
	const query = groq`{
		"post": *[_type == "post" && !(_id in path("drafts.**")) && defined(slug.current) && slug.current == $slug][0] {
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

/**
 * Get all posts from the dataset.
 *
 * @returns a promise
 *
 * @example
 *
 * const { posts } = await getPosts();
 */
export const getPosts: DatasetRequest = async () => {
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

	return client.fetch(query, queryParams);
};
