import type { ClientConfig } from '@sanity/client';
import { SANITY_DATASET, SANITY_PROJECT_ID, SANITY_TOKEN } from '$lib/env';

export const config: ClientConfig = {
	projectId: SANITY_PROJECT_ID,
	dataset: SANITY_DATASET,
	token: SANITY_TOKEN,
	apiVersion: '2021-11-20',
	useCdn: false
};
