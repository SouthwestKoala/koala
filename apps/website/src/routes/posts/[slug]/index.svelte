<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ params, fetch }) => {
		const { slug } = params;

		const res = await fetch(`/api/posts/${slug}.json`);

		if (res.ok) {
			const { post } = await res.json();

			return {
				props: {
					...post
				}
			};
		} else {
			const { status } = res;

			return {
				status
			};
		}
	};
</script>

<script lang="ts">
	import Time from 'svelte-time';
	import PortableText from '@portabletext/svelte';
	import type { PortableTextBlocks } from '@portabletext/svelte/ptTypes';
	import Page, { Header } from '$lib/layouts/Page';
	import { Image, Prose, SEO } from '$lib/components';

	export let body: PortableTextBlocks;
	export let description: string;
	export let image: ImageProps;
	export let keywords: string[];
	export let lead: string;
	export let publishedAt: string;
	export let title: string;
</script>

<SEO {description} {image} {keywords} {title} />

<Page>
	<Header slot="header" subtitle="Blog" {title}>
		<div class="mt-8 relative">
			<div class="absolute inset-0 flex items-center">
				<div class="w-full border-t border-neutral-300 dark:border-neutral-700" />
			</div>
			<div class="relative flex justify-center text-sm">
				<span
					class="px-2 bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400"
				>
					<Time timestamp={publishedAt} />
				</span>
			</div>
		</div>
		<p class="mt-8 text-xl italic text-neutral-700 dark:text-neutral-300 leading-8">
			{lead}
		</p>
	</Header>
	<Prose slot="body">
		<svelte:fragment slot="blocks" let:serializers>
			<PortableText blocks={body.slice(0, 1)} {serializers} />
			{#if image}<Image {image} />{/if}
			<PortableText blocks={body.slice(1)} {serializers} />
		</svelte:fragment>
	</Prose>
	<div slot="lead">Lead</div>
	<div slot="side">Side</div>
</Page>
