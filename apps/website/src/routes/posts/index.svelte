<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ stuff }) => {
		const { posts } = stuff;

		return {
			props: {
				posts
			}
		};
	};
</script>

<script lang="ts">
	import { derived, Readable } from 'svelte/store';
	import { Paginate, Tags } from '$lib/components';
	import Page, { Header } from '$lib/layouts/Page';
	import { Post } from '$lib/previews';
	import { tags } from '$lib/stores/tags';

	export let posts: Readable<
		{
			slug: string;
			tags: string[];
		}[]
	>;

	const taggedPosts = derived([posts, tags], ([$posts, $tags]) => {
		if ($tags.length === 0) {
			return $posts;
		}

		return $posts.filter((post) => $tags.filter((tag) => post.tags.includes(tag)).length > 0);
	});
</script>

<Page>
	<Header slot="header" subtitle="Blog" title="Thoughts and reflections." />

	<svelte:fragment slot="body">
		<div class="flex items-center justify-start">
			<Tags tags={$tags} />
		</div>
		<Paginate items={taggedPosts}>
			<ul
				slot="items"
				let:items
				class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 xl:grid-cols-4 sm:gap-x-6 xl:gap-x-8"
			>
				{#each items as post (post.slug)}
					<Post {...post} />
				{/each}
			</ul>
		</Paginate>
	</svelte:fragment>
</Page>
