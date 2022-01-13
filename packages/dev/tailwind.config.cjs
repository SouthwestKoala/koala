const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			neutral: colors.slate,
			accent: colors.orange,
		}
	}
};
