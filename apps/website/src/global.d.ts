/// <reference types="@sveltejs/kit" />

import type { SanityAsset, SanityImageObject } from '@sanity/image-url/lib/types/types';

declare global {
	type ImageProps = SanityImageObject & {
		asset: SanityAsset & {
			creditLine: string;
			description: string;
			source: {
				url: string;
			};
		};
	};
}
