<script lang="ts">
	import type { MarkProps } from '@portabletext/svelte';

	export let portableText: MarkProps<{
		_key: string;
		_type: 'link';
		href: string;
	}>;

	const { _key, href } = portableText.mark;
</script>

<a {href}><slot /></a>

<style lang="postcss">
	a {
		@apply text-current font-normal decoration-primary-500 decoration-2 underline-offset-4 hover:text-primary-500;
	}
</style>
