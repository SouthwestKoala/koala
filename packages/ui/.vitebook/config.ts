import { clientPlugin, defineConfig } from '@vitebook/client/node';
import { svelteMarkdownPlugin } from '@vitebook/markdown-svelte/node';
import { defaultThemePlugin, DefaultThemeConfig } from '@vitebook/theme-default/node';

export default defineConfig<DefaultThemeConfig>({
	include: ['src/**/*.md', 'src/**/*.story.svelte'],
	alias: {
		$app: '/node_modules/@sveltejs/kit/assets/app',
		$lib: '/src/lib'
	},
	plugins: [svelteMarkdownPlugin(), clientPlugin({ appFile: 'App.svelte' }), defaultThemePlugin()],
	site: {
		title: 'Design System',
		description: 'Southwest Koala Design System',
		theme: {}
	}
});
