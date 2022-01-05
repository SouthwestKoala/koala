/// <reference types="@sveltejs/kit" />

export type User = SanityDocument<{
	_type: string;
	_id: string;
	sub: string;
	likes?: {
		_type: 'reference';
		_key: string;
		_ref: string;
	}[];
}>;
