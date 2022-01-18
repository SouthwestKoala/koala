<script lang="ts">
	import type { MarkProps } from '@portabletext/svelte';

	export let portableText: MarkProps<{
		_key: string;
		_type: 'code';
		href: string;
	}>;

	const { _key, href } = portableText.mark;
</script>

<code><slot /></code>

<style lang="postcss">
	code {
		@apply text-current font-mono bg-accent-100/50 dark:bg-accent-900/50 -mx-0.5 px-0.5;

		&::after {
			content: none;
		}

		&::before {
			content: none;
		}
	}
</style>
