<script lang="ts">
	import { Link } from '$lib/serializers/marks';

	const serializers = {
		marks: {
			link: Link
		}
	};
</script>

<div
	class="prose prose-sm md:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl prose-slate dark:prose-invert prose-orange mx-auto text-justify"
>
	<slot name="blocks" {serializers} />
</div>
