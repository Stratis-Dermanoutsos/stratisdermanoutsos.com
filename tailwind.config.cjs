/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
	],
	theme: {
		extend: {
			colors: {
				'low': '#2E2E47',
				'medium': '#464567',
				'high': '#605F8E',
				'accent': '#1DFF9E',
			}
		}
	},
	plugins: [],
}
