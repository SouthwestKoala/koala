<script lang="ts">
	import type { MarkProps } from '@portabletext/svelte';

	export let portableText: MarkProps<{
		_key: string;
		_type: 'link';
		href: string;
	}>;

	const { _key, href } = portableText.mark;
</script>

<a {href} class="text-current font-normal decoration-orange-500 decoration-2 underline-offset-4 hover:text-orange-500"><slot /></a>
