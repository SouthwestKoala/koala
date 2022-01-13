<script lang="ts">
	export let subtitle = '';
	export let title: string;
</script>

<div class="text-lg max-w-prose mx-auto text-center">
	<h1>
		<span class="block text-base text-accent-500 font-semibold tracking-wide uppercase"
			>{subtitle}</span
		>
		<span
			class="mt-2 block text-3xl leading-8 font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl"
			>{title}</span
		>
	</h1>
	<slot />
</div>

<style lang="postcss">
</style>
