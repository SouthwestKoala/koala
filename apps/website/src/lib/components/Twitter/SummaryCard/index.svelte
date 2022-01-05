<script lang="ts">
	import { urlFor } from '$lib/services/sanity';

	export let description: string;
	export let image: ImageProps;
	export let title: string;
</script>

<svelte:head>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@southwestkoala" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={urlFor(image).width(320).maxHeight(320).fit('crop').url()} />
</svelte:head>
