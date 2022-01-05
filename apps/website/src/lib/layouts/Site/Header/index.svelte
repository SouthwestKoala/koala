<script lang="ts">
	const siteNavigation = [
		{ name: 'Posts', href: '/posts' },
		{ name: 'About', href: '/about' }
	];
</script>

<header class="w-full">
	<div class="max-w-screen-2xl mx-auto p-2 md:px-4 md:py-4">
		<div class="flex items-center justify-between">
			<div class="inline-flex items-center justify-start">
				<a
					href="/"
					class="text-base md:text-xl font-black tracking-tight text-slate-900 dark:text-slate-100 uppercase"
					>Southwest Koala</a
				>
			</div>
			<nav class="flex items-center justify-end space-x-8">
				<div class="hidden md:flex items-center justify-end space-x-8">
					{#each siteNavigation as { href, name } (name)}
						<a
							class="text-slate-800 dark:text-slate-200 hover:text-slate-600 dark:hover:text-slate-400 md:text-lg font-medium"
							{href}>{name}</a
						>
					{/each}
				</div>
			</nav>
		</div>
	</div>
</header>

<style lang="postcss">
	:global(body) {
		@apply bg-slate-100 dark:bg-slate-900;
	}
</style>
