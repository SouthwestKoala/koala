<script>
	import { dev } from '$app/env';
</script>

{#if dev}
	<div>
		<span class="sm:hidden">xs:</span>
		<span class="hidden sm:inline-block md:hidden ">sm:</span>
		<span class="hidden md:inline-block lg:hidden">md:</span>
		<span class="hidden lg:inline-block xl:hidden">lg:</span>
		<span class="hidden xl:inline-block 2xl:hidden">xl:</span>
		<span class="hidden 2xl:inline-block">2xl:</span>
	</div>
{/if}

<style lang="postcss">
	div {
		@apply fixed bottom-0 left-0 z-50 text-xs font-bold text-black p-2;
	}

	div span {
		@apply rounded p-2 text-slate-100 bg-purple-500;
	}
</style>
