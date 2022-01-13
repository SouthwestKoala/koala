<script lang="ts">
	import '../app.css';
</script>

<slot />

<style lang="postcss">
	:global(body) {
		@apply bg-neutral-100 dark:bg-neutral-900;
	}
</style>
