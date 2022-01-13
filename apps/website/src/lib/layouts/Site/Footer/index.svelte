<script lang="ts">
	import { Github, Twitter } from '$lib/components';
</script>

<footer>
	<div class="max-w-screen-2xl mx-auto px-8 py-12 md:flex md:items-center md:justify-between">
		<div class="flex justify-center space-x-6 md:order-2 text-neutral-500">
			<Github.Link />
			<Twitter.Link />
		</div>
		<div class="mt-8 md:mt-0 md:order-1">
			<p class="text-center text-sm text-neutral-500">
				&copy; {new Date().getFullYear()} Southwest Koala
			</p>
		</div>
	</div>
</footer>
