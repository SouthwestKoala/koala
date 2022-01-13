<script lang="ts">
	import { dev } from '$app/env';

	export let visible = dev;
</script>

{#if visible}
	<div>
		<span>:</span>
	</div>
{/if}

<style lang="postcss">
	div {
		@apply fixed bottom-0 left-0 z-50 text-sm font-bold m-4;

		& span {
			@apply rounded p-2 text-[color:var(--theme-neutral-100)] dark:text-[color:var(--theme-neutral-900)] bg-[color:var(--theme-accent-500)] shadow;

			@apply before:content-['xs'];
			@apply sm:before:content-['sm'];
			@apply md:before:content-['md'];
			@apply lg:before:content-['lg'];
			@apply xl:before:content-['xl'];
			@apply 2xl:before:content-['2xl'];
		}
	}
</style>
