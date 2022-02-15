<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let disabled = false;
  export let primary = false;
  export let type: "button" | "menu" | "reset" | "submit" = "button";
  export let variant: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'lg';

  createEventDispatcher();
</script>

<button
  {disabled}
  {type}
  class:primary
  class:xs={variant === 'xs'}
	class:sm={variant === 'sm'}
	class:md={variant === 'md'}
	class:lg={variant === 'lg'}
	class:xl={variant === 'xl'}
  on:click
>
  <slot>{type.toString().charAt(0).toLocaleUpperCase() + type.slice(1)}</slot>
</button>

<style lang="postcss">
  button {
		@apply inline-flex items-center justify-center;
		@apply border border-transparent shadow;
		@apply font-medium;

		@apply text-[color:var(--theme-neutral-900)] dark:text-[color:var(--theme-neutral-100)];
		@apply bg-[color:var(--theme-primary-100)] dark:bg-[color:var(--theme-primary-900)];

		&:active {
			@apply relative inset-y-px shadow-none;
		}

		&:disabled {
			@apply pointer-events-none;
			@apply text-[color:var(--theme-neutral-500)];
		}

		&:focus {
			@apply outline-none ring-2 ring-offset-2 ring-[color:var(--theme-primary-500)];
		}

		&:hover {
			@apply text-[color:var(--theme-neutral-800)] dark:text-[color:var(--theme-neutral-200)];
			@apply bg-[color:var(--theme-primary-200)] dark:bg-[color:var(--theme-primary-800)];
		}
	}

	button.primary {
		@apply text-[color:var(--theme-neutral-100)] dark:text-[color:var(--theme-neutral-900)];
		@apply bg-[color:var(--theme-primary-500)];

		&:hover {
			@apply text-[color:var(--theme-neutral-200)] dark:text-[color:var(--theme-neutral-800)];
			@apply bg-[color:var(--theme-primary-800)] dark:bg-[color:var(--theme-primary-200)];
		}
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
		@apply px-5 py-3 text-base rounded-md;
	}

	button.xl {
		@apply px-6 py-3 text-base rounded-md;
	}
</style>