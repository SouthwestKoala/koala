import { test, expect } from '@playwright/test';

test.describe('GET /v1.0/pages/[slug].json', () => {
	test.describe('with a valid slug', () => {
		test('should succeed', async ({ request }) => {
			const res = await request.get(`http://localhost:3001/v1.0/pages/about.json`);

			expect(res.ok()).toBeTruthy();
		});

		test('should respond with a single page', async ({ request }) => {
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
