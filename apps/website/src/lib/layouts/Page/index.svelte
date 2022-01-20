<script lang="ts">
	import { Footer } from '$lib/layouts/Page';
</script>

<main class="flex flex-col gap-y-16 md:gap-y-32">
	<slot name="header" />
	<slot name="body">
		<div class="flex flex-col xl:flex-row mx-auto gap-y-8 md:gap-y-16 lg:gap-x-8">
			<slot name="left" />
			<slot />
			<slot name="right" />
		</div>
	</slot>
	<slot name="footer">
		<Footer />
	</slot>
</main>

<style lang="postcss">
	main {
		@apply max-w-screen-2xl mx-auto py-16 px-8 sm:py-24 border-y border-neutral-200 dark:border-neutral-800;
	}
</style>
