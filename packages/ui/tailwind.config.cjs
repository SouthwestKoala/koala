module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./src/**/*.story.svelte',
		'./.vitebook/App.svelte'
	],
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/typography')
	]
};
