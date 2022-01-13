<script lang="ts">
	import type { BlockProps } from '@portabletext/svelte';

	export let portableText: BlockProps<{
    code: string;
    language: string;
	}>;

	let { code, language } = portableText.block;
</script>

<pre>
  <code>
    {code}
  </code>
</pre>

<style lang="postcss">
  pre {
    @apply -mx-4 px-4;
  }
</style>