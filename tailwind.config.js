/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
	darkMode: "class",
	content: [
		"./App.{js,jsx,ts,tsx}",
		"./screens/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				orbitron: ["Poppins", "sans-serif"],
			},
			height: {
				128: "32rem",
			},
		},
		colors: {
			navbar: "#383F51",
			red: "#C20114",
			transparent: "transparent",
			black: colors.black,
			gray: "#A5A5A5",
			white: colors.white,
			indigo: colors.indigo,
			yellow: colors.amber,
			green: colors.green,
		},
	},
	plugins: [],
};
