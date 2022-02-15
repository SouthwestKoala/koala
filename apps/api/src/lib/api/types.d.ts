import type { SanityDocument } from '@sanity/client';

export interface DatasetRequest {
	(args: { params: Record<string, string> }): Promise<SanityDocument>;
}
