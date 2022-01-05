<script context="module" lang="ts">
	const PAGE_SIZE = 12;
	const LIMIT = 2;
</script>

<script lang="ts">
	import { derived } from 'svelte/store';
	import type { Readable } from 'svelte/store';
	import { Solid } from '$lib/components/HeroIcons';
	import { searchParams } from '$lib/stores/searchParams';

	export let items: Readable<any[]>;

	const count = derived(items, ($items) => $items.length);
	export let pageSize = PAGE_SIZE;

	const range = (start: number, end: number, length = end - start + 1) =>
		Array.from({ length }, (_, i) => start + i);

	const pageCount = derived(count, ($count) => Math.ceil($count / pageSize));
	const currentPage = derived([searchParams, pageCount], ([$searchParams, $pageCount]) =>
		Math.max(1, Math.min(+($searchParams.get('page') || '1'), $pageCount))
	);

	$: pageLink = (pageNumber: number) => {
		const params = new URLSearchParams($searchParams);

		params.set('page', `${pageNumber}`);

		return `?${params.toString()}`;
	};

	const paginatedItems = derived([items, currentPage], ([$items, $currentPage]) =>
		$items.slice(($currentPage - 1) * PAGE_SIZE, $currentPage * PAGE_SIZE)
	);

	$: nextLink = () => {
		if ($currentPage < $pageCount) {
			return pageLink($currentPage + 1);
		}
	};

	$: prevLink = () => {
		if ($currentPage > 1) {
			return pageLink($currentPage - 1);
		}
	};
</script>

<slot name="items" items={$paginatedItems} />

{#if $pageCount > 1}
	<nav class="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
		<div class="-mt-px w-0 flex-1 flex">
			<a
				href={prevLink()}
				class="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
			>
				<Solid.ArrowNarrowLeft class="text-gray-400 w-5 h-5" />
				Previous
			</a>
		</div>
		<div class="hidden md:-mt-px md:flex">
			{#each range(1, $pageCount) as p}
				{#if p === $currentPage}
					<a
						href={pageLink(p)}
						class="border-purple-500 text-purple-600 dark:text-purple-400 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
						aria-current="page"
					>
						{p}
					</a>
				{:else if p === 1 || p === $pageCount || (p >= $currentPage - LIMIT && p <= $currentPage + LIMIT)}
					<a
						href={pageLink(p)}
						class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
					>
						{p}
					</a>
				{:else if p >= $currentPage - (LIMIT + 1) && p <= $currentPage + (LIMIT + 1)}
					<span
						class="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
					>
						<Solid.DotsHorizontal class="text-gray-400 w-5 h-5" />
					</span>
				{/if}
			{/each}
		</div>
		<div class="-mt-px w-0 flex-1 flex justify-end">
			<a
				href={nextLink()}
				class="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
			>
				Next
				<Solid.ArrowNarrowRight class="text-gray-400 w-5 h-5" />
			</a>
		</div>
	</nav>
{/if}

<style lang="postcss">
	a:not([href]) {
		@apply hidden;
	}
</style>
