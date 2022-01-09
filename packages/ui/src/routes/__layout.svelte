<script lang="ts">
	import '../app.css';
</script>

<slot />

<style lang="postcss">
	:global(body) {
		@apply bg-slate-100 dark:bg-slate-900;
	}
</style>
