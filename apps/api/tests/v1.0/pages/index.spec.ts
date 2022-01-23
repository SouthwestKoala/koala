import { test, expect } from '@playwright/test';

test.describe('GET /v1.0/pages.json', () => {
  test('should fail', async ({ request }) => {
    const res = await request.get(`http://localhost:3001/v1.0/pages.json`);

    expect(res.ok()).toBeFalsy();
  });

  test('should return status 404', async ({ request }) => {
    const res = await request.get(`http://localhost:3001/v1.0/pages.json`);

    expect(res.status()).toBe(404);
  });
});
