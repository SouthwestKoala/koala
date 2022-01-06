<script lang="ts">
	import { urlFor } from '$lib/services/sanity';

	export let image: ImageProps;

	const {
		asset: {
			creditLine,
			description,
			source: { url }
		}
	} = image;
</script>

{#if image}
	<div class="relative">
		{#if creditLine && url}
			<div class="absolute bottom-0 right-0">
				<div
					class="text-xs bg-slate-100 text-slate-900 opacity-25 px-1.5 border rounded-br-lg hover:opacity-75"
				>
					Credit: <a class="no-underline" href={url}>{creditLine}</a>
				</div>
			</div>
		{/if}
		<img src={urlFor(image).width(975).maxHeight(650).fit('crop').url()} alt={description} />
	</div>
{/if}

<style lang="postcss">
	img {
		@apply w-full rounded-lg shadow-lg;
	}
</style>
