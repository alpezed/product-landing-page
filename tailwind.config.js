/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				primary: {
					dark: "#1A1A23",
					light: "#F9F9FB",
				},
				secondary: "#F5F5F5",
				"btn-primary": "#004781",
				"inverse-color": "#32323A",
				"inverse-text": "#EDECEE",
				link: {
					secondary: "#BCDBFF",
					tertiary: "#147CD3",
				},
				divider: {
					stroke: "#C0C0C4",
				},
				greyscale: {
					slate: {
						300: "#C0C0C4",
						800: "#32323A",
					},
				},
			},
			maxWidth: {
				container: "1300px",
			},
			boxShadow: {
				item: "0px 3px 20px 2px rgba(0, 0, 0, 0.05)",
			},
			fontFamily: {
				body: ['"Source Sans 3"'],
			},
		},
	},
	plugins: [],
};
