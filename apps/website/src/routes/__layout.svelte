<script lang="ts">
	import '../app.css';
	import { Dev } from '$lib/components';
	import { Footer, Header } from '$lib/layouts/Site';
</script>

<Dev.Breakpoint />

<Header />
<slot />
<Footer />
