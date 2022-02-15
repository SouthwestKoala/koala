import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import { SANITY_DATASET, SANITY_PROJECT_ID } from '$lib/env';

const builder = imageUrlBuilder({
	projectId: SANITY_PROJECT_ID,
	dataset: SANITY_DATASET
});

export const urlFor = (source: SanityImageSource): ImageUrlBuilder => builder.image(source);
