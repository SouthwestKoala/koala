<script lang="ts">
	import { Marks, Types } from '$lib/serializers';

	const serializers = {
		marks: {
			code: Marks.Code,
			link: Marks.Link
		},
		types: {
			code: Types.Code
		}
	};
</script>

<div
	class="prose prose-sm md:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl prose-neutral dark:prose-invert mx-auto text-justify"
>
	<slot name="blocks" {serializers} />
</div>
