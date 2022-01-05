import { API_BASE_URL } from '$lib/env';

export const api_url = ({
	path,
	base_url = API_BASE_URL,
	version = 'v1.0'
}: {
	path: string;
	base_url?: string;
	version?: string;
}): string => [base_url, version, path].join('/');
