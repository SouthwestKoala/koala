<script lang="ts">
	import { Cookie, Footer, Header } from '$lib/layouts/Site';
</script>

<div>
	<slot name="banner" />
	<slot name="header">
		<Header />
	</slot>
	<slot />
	<slot name="footer">
		<Footer />
	</slot>
</div>
