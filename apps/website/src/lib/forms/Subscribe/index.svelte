<script lang="ts">
	import { Button } from '@southwestkoala/ui/elements';
	import { state } from '$lib/stores/state';
</script>

<section>
	<div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
		<div class="lg:w-0 lg:flex-1">
			<h2>Sign up for notifications</h2>
			<p class="mt-3 max-w-3xl text-lg leading-6">
				Be notified of new articles and receive updates about the technology that builds this site.
			</p>
		</div>
		<div class="mt-8 lg:mt-0 lg:ml-8">
			<form action={`/api/forms/subscribe?state=${$state}`} method="POST" class="sm:flex">
				<label for="email" class="sr-only">Email address</label>
				<input
					id="email"
					name="email"
					type="email"
					autocomplete="email"
					required
					class=""
					placeholder="Enter your email"
				/>
				<div class="mt-3 sm:mt-0 sm:ml-3 sm:flex-shrink-0">
					<Button primary type="submit">Notify me</Button>
				</div>
			</form>
			<p class="mt-3 text-sm text-neutral-700 dark:text-neutral-300">
				We care about the protection of your data. Read our
				<a href="/privacy" class="text-accent-500 font-medium underline"> Privacy Policy. </a>
			</p>
		</div>
	</div>
</section>

<style lang="postcss">
	section {
		@apply text-neutral-800 dark:text-neutral-200 bg-neutral-200 dark:bg-neutral-800;
	}

	h2 {
		@apply text-3xl sm:text-4xl font-extrabold tracking-tight text-accent-500;
	}

	input {
		@apply w-full px-5 py-3 border border-transparent placeholder-neutral-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-accent-500 focus:border-neutral-100 sm:max-w-xs rounded-md;
	}
</style>
