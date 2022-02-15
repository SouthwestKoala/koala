import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import mm from 'micromatch';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({ postcss: true }),

	kit: {
		adapter: adapter(),
		package: {
			// exports: (filepath) => {
			// 	if (filepath.endsWith('.d.ts')) return false;
			// 	return mm.isMatch(filepath, ['**/*.svelte'])
			// },
			//files: mm.matcher('!**/*{.md,.story.svelte}')
		}
	}
};

export default config;
