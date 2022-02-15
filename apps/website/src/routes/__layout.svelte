<script lang="ts">
	import '../app.css';
	import Site from '$lib/layouts/Site';
	import { Breakpoint } from '@southwestkoala/ui/utility';
</script>

<Breakpoint />

<Site>
	<slot />
</Site>