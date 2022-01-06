<script lang="ts">
	import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@rgossiaux/svelte-headlessui';
	import { Outline } from '$lib/components/HeroIcons';

	const siteNavigation = [
		{ name: 'Posts', href: '/posts' },
		{ name: 'About', href: '/about' }
	];
</script>

<header class="w-full">
	<div class="max-w-screen-2xl mx-auto p-2 sm:px-4 sm:py-4">
		<div class="flex items-center justify-between">
			<div class="inline-flex items-center justify-start">
				<a
					href="/"
					class="text-base sm:text-xl font-black tracking-tight text-slate-900 dark:text-slate-100 uppercase"
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
				<Menu as="div" class="md:hidden ml-3 relative z-50">
					<div>
						<MenuButton
							class="max-w-xs bg-slate-100 dark:bg-slate-900 flex items-center md:rounded-full focus:outline-none focus:ring-2 focus:ring-offset-transparent"
						>
							<span class="sr-only">Open menu</span>
							<Outline.Menu
								class="md:hidden w-6 h-6 text-slate-800 dark:text-slate-200 hover:text-slate-600 dark:hover:text-slate-400"
							/>
						</MenuButton>
					</div>
					<Transition
						enter="transition ease-out duration-200"
						enterFrom="transform opacity-0 scale-95"
						enterTo="transform opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100 scale-100"
						leaveTo="transform opacity-0 scale-95"
					>
						<MenuItems
							class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-slate-100 dark:bg-slate-900 ring-1 ring-slate-900 dark:ring-slate-100 ring-opacity-5 focus:outline-none"
						>
							{#each siteNavigation as { href, name } (name)}
								<MenuItem let:active>
									<a {href} class="block px-4 py-2 text-sm" class:active>
										{name}
									</a>
								</MenuItem>
							{/each}
						</MenuItems>
					</Transition>
				</Menu>
			</nav>
		</div>
	</div>
</header>

<style lang="postcss">
	:global(body) {
		@apply bg-slate-100 dark:bg-slate-900;
	}

	nav a {
		@apply text-slate-800 hover:text-slate-600 md:text-lg font-medium dark:text-slate-200 dark:hover:text-slate-400;
	}

	a.active {
		@apply bg-slate-200 dark:bg-slate-800;
	}
</style>
