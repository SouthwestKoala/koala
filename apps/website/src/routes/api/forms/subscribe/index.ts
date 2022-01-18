import { api_url } from '$lib/services/api';
import type { RequestHandler } from '@sveltejs/kit';
import type { ReadOnlyFormData } from '@sveltejs/kit/types/helper';
import { base64url } from 'jose';

export const post: RequestHandler = async ({ body, url: { searchParams } }) => {
	const state = searchParams.get('state');
	const form = body as ReadOnlyFormData;

	const { email, serial } = [...form.entries()].reduce((data, [key, value]) => {
		data[key] = value;
		return data;
	}, {} as Record<string, unknown>);

	if (serial) {
		// beep-boop
		return {
			status: 200
		};
	}

	const url = api_url({ path: `forms/subscribe` });

	const res = await fetch(url, {
		body: JSON.stringify({ email }),
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'POST'
	});

	if (res.ok) {
		const location = (state && base64url.decode(state)) || '/';

		return {
			status: 303,
			headers: {
				location
			}
		};
	} else {
		const {status } = res;

		return {
			status
		};
	}
};
