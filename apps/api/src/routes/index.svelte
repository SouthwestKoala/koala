<script context="module" lang="ts">
	import { dev } from '$app/env';

	import type { Load } from '@sveltejs/kit';

	export const load: Load = async () => {
		return {
			status: dev ? 302 : 301,
			redirect: dev ? 'http://localhost:3000' : 'https://southwestkoala.co.uk'
		};
	};
</script>
