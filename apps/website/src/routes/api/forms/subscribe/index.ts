import { api_url } from '$lib/services/api';
import type { RequestHandler } from '@sveltejs/kit';
import { base64url } from 'jose';

export const post: RequestHandler = async ({ request, url: { searchParams } }) => {
	const state = searchParams.get('state');
	const body = await request.formData();

	if (body.has('serial')) {
		// beep-boop
		return {
			status: 200
		};
	}

	const url = api_url({ path: `forms/subscribe` });

	const res = await fetch(url, {
		body: JSON.stringify({ email: body.get('email') }),
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'POST'
	});

	if (res.ok) {
		const location = (state && base64url.decode(state).toString()) || '/';

		return {
			status: 303,
			headers: {
				location
			}
		};
	} else {
		const { status } = res;

		return {
			status
		};
	}
};
