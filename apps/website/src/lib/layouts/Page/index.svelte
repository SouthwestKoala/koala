<main class="flex flex-col gap-y-16 md:gap-y-32">
	<slot name="header" />
	<slot name="body">
		<div class="flex flex-col xl:flex-row mx-auto gap-y-8 md:gap-y-16 lg:gap-x-8">
			<slot name="left" />
			<slot name="content" />
			<slot name="right" />
		</div>
	</slot>
	<slot name="footer" />
</main>

<style lang="postcss">
	main {
		@apply max-w-screen-2xl mx-auto py-16 px-8 sm:py-24 border-y border-slate-200 dark:border-slate-800;
	}
</style>
