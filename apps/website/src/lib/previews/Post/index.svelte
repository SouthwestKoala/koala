<script lang="ts">
	import type { PortableTextBlocks } from '@portabletext/svelte/ptTypes';
	import { goto } from '$app/navigation';
	import { Solid } from '$lib/components/HeroIcons';
	import { urlFor } from '$lib/services/sanity';

	export let body: PortableTextBlocks;
	export let image: ImageProps;
	export let slug: string;
	export let title: string;
</script>

<li class="relative md:col-span-2 md:grid md:grid-cols-2">
	<div
		class="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-purple-500 overflow-hidden"
	>
		<img
			src={urlFor(image).maxWidth(320).maxHeight(320).url()}
			alt={image.asset.description}
			class="object-cover pointer-events-none group-hover:opacity-75 group-hover:scale-105"
		/>
		<button type="button" class="absolute inset-0 focus:outline-none" on:click={() => goto(slug)}>
			<span class="sr-only">Navigate to {title}</span>
		</button>
	</div>
	<div class="flex flex-col justify-between m-2 p-2">
		<div>
			<p class="mt-2 block text-xl font-medium text-purple-600 truncate pointer-events-none">
				{title}
			</p>
			<p class="mt-2 block text-base font-normal text-gray-900 line-clamp-5">
				{body}
			</p>
		</div>
		<a href={slug} class="text-purple-600 text-right inline-flex items-center justify-end"
			>Read <Solid.ArrowNarrowRight /></a
		>
	</div>
</li>

<style lang="postcss">
	img {
		@apply w-full rounded-lg shadow-lg;
	}
</style>
