<script lang="ts">
	import type { PortableTextBlocks } from '@portabletext/svelte/ptTypes';
	import { Solid } from '@southwestkoala/ui/icons/HeroIcons';
	import { goto } from '$app/navigation';
	import { Tags } from '$lib/components';
	import { urlFor } from '$lib/services/sanity';

	export let body: PortableTextBlocks;
	export let image: ImageProps;
	export let slug: string;
	export let tags: string[];
	export let title: string;
</script>

<li class="relative md:col-span-2 md:grid md:grid-cols-2">
	<div
		class="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-neutral-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-neutral-100 focus-within:ring-primary-500 overflow-hidden"
	>
		{#if image}
			<img
				src={urlFor(image).maxWidth(320).maxHeight(320).url()}
				alt={image.asset.description}
				class="object-cover pointer-events-none group-hover:opacity-75 group-hover:scale-105"
			/>
			<button type="button" class="absolute inset-0 focus:outline-none" on:click={() => goto(slug)}>
				<span class="sr-only">Navigate to {title}</span>
			</button>
		{/if}
	</div>
	<div class="flex flex-col justify-between m-2 p-2">
		<div>
			<p class="mt-2 block text-xl font-medium text-primary-500 truncate pointer-events-none">
				{title}
			</p>
			<p
				class="mt-2 block text-base font-normal text-neutral-900 dark:text-neutral-100 line-clamp-5"
			>
				{body}
			</p>
		</div>
		<div>
			<Tags {tags} />
		</div>
		<a href={slug} class="text-primary-500 text-right inline-flex items-center justify-end"
			>Read <Solid.ArrowNarrowRight /></a
		>
	</div>
</li>

<style lang="postcss">
	img {
		@apply w-full rounded-lg shadow-lg;
	}
</style>
