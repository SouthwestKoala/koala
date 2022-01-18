import type { RequestHandler } from '@sveltejs/kit';
import {
	EMAILJS_ACCESS_TOKEN,
	EMAILJS_SERVICE_ID,
	EMAILJS_USER_ID,
	EMIALJS_TEMPLATE_ID_SUBSCRIBE
} from '$lib/env';
import type { JSONValue } from '@sveltejs/kit/types/helper';

export const post: RequestHandler = async ({ body }) => {
	const { email } = body as JSONValue as { email: string };

	if (!email) {
		return {
			status: 400
		};
	}

	const data = {
		accessToken: EMAILJS_ACCESS_TOKEN,
		service_id: EMAILJS_SERVICE_ID,
		template_id: EMIALJS_TEMPLATE_ID_SUBSCRIBE,
		user_id: EMAILJS_USER_ID,
		template_params: {
			email
		}
	};

	const { status } = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'POST'
	});

	return {
		status
	};
};
