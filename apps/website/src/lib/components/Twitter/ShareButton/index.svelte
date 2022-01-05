<script lang="ts">
	import { page } from '$app/stores';
	import { derived, readable } from 'svelte/store';

	export let title: string;

	const text = readable(title);
	const params = derived([page, text], ([{ url }, $text]) =>
		new URLSearchParams({ text: $text, url: url.toString(), via: 'southwestkoala' }).toString()
	);
</script>

<svelte:head>
	<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</svelte:head>

<a
	href={`https://twitter.com/intent/tweet?${$params}`}
	class="twitter-share-button"
	data-size="large"
>
	Tweet
</a>
