<script lang="ts">
	import '../app.css';
	import { Footer, Header } from '$lib/layouts/Site';
	import { Breakpoint } from '@southwestkoala/ui/elements';
</script>

<Breakpoint />

<Header />
<slot />
<Footer />
