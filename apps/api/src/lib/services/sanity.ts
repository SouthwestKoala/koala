import sanityClient from '@sanity/client'
import { config } from '$lib/config/sanity';

export const client = sanityClient(config)
