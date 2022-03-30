<script context="module" lang="ts">
	import type { ErrorLoad } from '@sveltejs/kit';

	export const load: ErrorLoad = ({ error, status }) => {
		if (error) {
			return {
				props: {
					status,
					message: error.message.split(':')[0]
				}
			};
		} else {
			return {
				props: {
					status
				}
			};
		}
	};
</script>

<script lang="ts">
	export let status: number;
	export let message: string;
</script>

<main
	class="bg-neutral-100 dark:bg-neutral-900 fixed left-0 top-0 right-0 bottom-0 z-50 grid place-content-center place-items-center "
>
	<div class="mx-auto p-8">
		<div class="sm:flex">
			<p class="text-4xl font-extrabold text-primary-500 sm:text-5xl">{status}</p>
			<div class="sm:ml-6">
				<div class="sm:border-l sm:border-neutral-200 dark:sm:border-neutral-800 sm:pl-6">
					<h1
						class="text-4xl font-extrabold text-neutral-900 dark:text-neutral-100 tracking-tight sm:text-5xl"
					>
						{message}
					</h1>
					<p class="mt-1 text-base text-neutral-500">
						Please check the URL in the address bar and try again.
					</p>
				</div>
				<div class="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
					<a
						href="/"
						class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-neutral-100 dark:text-neutral-900 bg-primary-500 hover:bg-primary-600 dark:hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
					>
						Go back home
					</a>
				</div>
			</div>
		</div>
	</div>
</main>
