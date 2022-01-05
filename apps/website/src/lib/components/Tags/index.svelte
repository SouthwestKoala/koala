<script lang="ts">
	import { Tag } from '$lib/components/Tags';

	export let tags: string[];
</script>

{#each tags as tag}
	{#key tag}
		<Tag {tag} />
	{/key}
{/each}
