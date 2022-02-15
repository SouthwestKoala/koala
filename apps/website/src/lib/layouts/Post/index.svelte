<script lang="ts">
	import { Footer } from '$lib/layouts/Page';
</script>

<main>
	<slot name="header" />
	<div class="flex flex-row gap-x-8 gap-y-16 md:gap-y-32">
		<div class="basis-3/4 grow">
			<slot name="main">
				<slot name="head" />
				<div class="flex flex-row gap-x-8 gap-y-16 md:gap-y-32">
					<div class="hidden md:block basis-1/4 grow-0">
						<slot name="lead" />
					</div>
					<div class="basis-3/4 grow">
						<slot name="body" />
					</div>
				</div>
				<slot name="foot" />
			</slot>
		</div>
		<div class="hidden lg:block basis-1/4 grow-0">
			<slot name="side" />
		</div>
	</div>
	<slot class="footer" />
</main>

<style lang="postcss">
	main {
		@apply max-w-screen-2xl mx-auto py-16 px-8 sm:py-24 border-y border-neutral-200 dark:border-neutral-800;
	}
</style>
