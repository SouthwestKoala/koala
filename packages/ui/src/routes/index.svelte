<script lang="ts">
	import { Button } from '$lib';
</script>

<main class="max-w-xl mx-auto space-y-8">
	<h1 class="text-5xl tracking-tight font-black text-center">Primary Buttons</h1>

	<div class="flex items-center justify-evenly">
		<Button primary variant="xs" />
		<Button primary variant="sm" />
		<Button primary variant="md" />
		<Button primary variant="lg" />
		<Button primary variant="xl" />
	</div>

	<h1 class="text-5xl tracking-tight font-black text-center">Secondary Buttons</h1>

	<div class="flex items-center justify-evenly">
		<Button variant="xs" />
		<Button variant="sm" />
		<Button variant="md" />
		<Button variant="lg" />
		<Button variant="xl" />
	</div>

	<h1 class="text-5xl tracking-tight font-black text-center">Together</h1>
	<div class="flex items-center justify-center space-x-4">
		<Button primary>OK</Button>
		<Button>Cancel</Button>
	</div>

	<h1 class="text-5xl tracking-tight font-black text-center">With Icons</h1>
	<div class="flex items-center justify-center space-x-4">
		<Button primary>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="-ml-1 mr-1 h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
			</svg>
			OK
		</Button>
	</div>
</main>
