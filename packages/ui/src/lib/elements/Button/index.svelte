<script lang="ts">
	export let primary = false;
	export let variant: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'lg';
</script>

<button
	type="button"
	on:click
	class="inline-flex items-center border border-transparent font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
	class:primary
	class:xs={variant === 'xs'}
	class:sm={variant === 'sm'}
	class:md={variant === 'md'}
	class:lg={variant === 'lg'}
	class:xl={variant === 'xl'}
>
	<slot>Submit</slot>
</button>

<style lang="postcss">
	button {
		@apply text-slate-800 dark:text-slate-200;
		@apply hover:text-slate-700 dark:hover:text-slate-300;
		@apply bg-orange-100 dark:bg-orange-900;
		@apply hover:bg-orange-200 dark:hover:bg-orange-800;
	}

	button.primary {
		@apply text-slate-100 dark:text-slate-900;
		@apply hover:text-slate-200 dark:hover:text-slate-800;
		@apply bg-orange-500;
		@apply hover:bg-orange-600 dark:hover:bg-orange-400;
	}

	button.xs {
		@apply px-2.5 py-1.5 text-xs rounded;
	}

	button.sm {
		@apply px-3 py-2 text-sm leading-4 rounded-md;
	}

	button.md {
		@apply px-4 py-2 text-sm rounded-md;
	}

	button.lg {
		@apply px-4 py-2 text-base rounded-md;
	}

	button.xl {
		@apply px-6 py-3 text-base rounded-md;
	}
</style>
