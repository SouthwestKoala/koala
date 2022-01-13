<script lang="ts">
	import { derived } from 'svelte/store';
	import { Solid } from '@southwestkoala/ui/icons/HeroIcons';
	import { searchParams } from '$lib/stores/searchParams';
	import { tags } from '$lib/stores/tags';

	export let tag: string;

	const active = derived(tags, ($tags) => $tags.includes(tag));

	const link = derived([active, tags], ([$active, $tags]) => {
		const params = new URLSearchParams($searchParams);

		if ($active) {
			params.delete('tag');
			$tags.filter((t) => t !== tag).forEach((t) => params.append('tag', t));
		} else {
			params.append('tag', tag);
		}

		return `?${params.toString()}`;
	});
</script>

<a href={$link} class="inline-flex items-center justify-start" class:active={$active}>
	<Solid.Hashtag class="-ml-0.5 h-3 w-3" />{tag}
</a>

<style lang="postcss">
	a {
		@apply text-xs text-accent-500 font-medium ml-1 px-1.5 py-0.5 rounded-full;
	}

	a.active {
		@apply text-white bg-accent-500 shadow shadow-accent-500/50;
	}

	a:hover {
		@apply text-white bg-accent-500 shadow shadow-accent-500/50;
	}
</style>
