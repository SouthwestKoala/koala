<script lang="ts">
	import { Twitter } from '$lib/components';

	export let description: string;
	export let image: ImageProps;
	export let keywords: string[];
	export let title: string;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords.join(',')} />

	<Twitter.SummaryCard {description} {image} {title} />
</svelte:head>
