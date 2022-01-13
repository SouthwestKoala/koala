<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { readable } from 'svelte/store';

	export const load: Load = async ({ fetch }) => {
		const res = await fetch(`/api/posts.json`);

		if (res.ok) {
			const { posts } = await res.json();

			return {
				stuff: {
					posts: readable(posts)
				}
			};
		} else {
			const { status } = res;

			return {
				status
			}
		};
	};
</script>

<slot />
