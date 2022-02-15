import { test, expect } from '@playwright/test';

test.describe('GET /v1.0/pages/[slug].json', () => {
	test.describe('with a valid slug', () => {
		test('should succeed', async ({ request }) => {
			const res = await request.get(`http://localhost:3001/v1.0/pages/about.json`);

			expect(res.ok()).toBeTruthy();
		});

		test('should respond with JSON', async ({ request }) => {
			const response = await request.get(`http://localhost:3001/v1.0/pages/about.json`);

			expect(response.headers()['content-type']).toBe('application/json; charset=utf-8');
		});

		test('should respond with a single page resource', async ({ request }) => {
			const resource = await request
				.get(`http://localhost:3001/v1.0/pages/about.json`)
				.then((res) => res.json());

			expect(resource).toHaveProperty('page');
		});

		test('should respond with a single page resource of the requested page', async ({
			request
		}) => {
			const { page } = await request
				.get(`http://localhost:3001/v1.0/pages/about.json`)
				.then((res) => res.json());

			expect(page.slug).toBe('about');
		});
	});

	test.describe('with an invalid slug', () => {
		test('should fail', async ({ request }) => {
			const res = await request.get(`http://localhost:3001/v1.0/pages/--invalid.json`);

			expect(res.ok()).toBeFalsy();
		});

		test('should return status 404', async ({ request }) => {
			const res = await request.get(`http://localhost:3001/v1.0/pages/--invalid.json`);

			expect(res.status()).toBe(404);
		});
	});
});
