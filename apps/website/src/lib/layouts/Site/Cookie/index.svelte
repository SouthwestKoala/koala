<script lang="ts">
	import { Button } from '@southwestkoala/ui/elements';
	import { Outline } from '@southwestkoala/ui/icons/HeroIcons';

	const handleOnClick = () => {};
</script>

<div class="fixed inset-x-0 bottom-0">
	<div class="bg-primary-500">
		<div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
			<div class="flex items-center justify-between flex-wrap">
				<div class="w-0 flex-1 flex items-center">
					<span class="flex p-2 rounded-lg">
						<Outline.ShieldCheck class="h-6 w-6 text-neutral-100" aria-hidden="true" />
					</span>
					<p class="ml-3 text-xs sm:text-lg font-medium text-neutral-100">
						<span class="inline sm:hidden"
							>By clicking accept, you consent to our privacy policy & use of cookies.</span
						>
						<span class="hidden sm:inline"
							>We use cookies to offer a better browsing experience and personalize content. Please
							review our privacy policy & cookies information page. By clicking accept, you consent
							to our privacy policy & use of cookies.</span
						>
					</p>
				</div>
				<div class="mt-2 flex-shrink-0 w-full order-3 sm:order-2 sm:mt-0 sm:w-auto">
					<Button on:click={handleOnClick}>Accept</Button>
				</div>
			</div>
		</div>
	</div>
</div>
