<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ params, fetch }) => {
		const { slug } = params;

		const res = await fetch(`/api/pages/${slug}.json`);

		if (res.ok) {
			const { page } = await res.json();

			return {
				props: {
					...page
				}
			};
		}
	};
</script>

<script lang="ts">
	import PortableText from '@portabletext/svelte';
	import type { PortableTextBlocks } from '@portabletext/svelte/ptTypes';
	import Page, { Header } from '$lib/layouts/Page';
	import { Image, Prose, SEO } from '$lib/components';
	import { Link } from '$lib/serializers/marks';

	export let body: PortableTextBlocks;
	export let description: string;
	export let image: ImageProps;
	export let keywords: string[];
	export let lead: string;
	export let slug: string;
	export let title: string;
</script>

<SEO {description} {image} {keywords} {title} />

<Page>
	<Header slot="header" {title}>
		{#if lead}
			<p class="mt-8 text-xl italic text-slate-600 dark:text-slate-400 leading-8">
				{lead}
			</p>
		{/if}
	</Header>
	<svelte:fragment slot="body">
		<Prose slot="body">
			<PortableText blocks={body.slice(0, 1)} serializers={{ marks: { link: Link } }} />
			<Image {image} />
			<PortableText blocks={body.slice(1)} serializers={{ marks: { link: Link } }} />
		</Prose>
	</svelte:fragment>
</Page>
