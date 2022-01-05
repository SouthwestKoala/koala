<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { dev } from '$app/env';

	export const load: Load = async () => {
		return {
			status: dev ? 302 : 301,
			redirect: '/about'
		};
	};
</script>
