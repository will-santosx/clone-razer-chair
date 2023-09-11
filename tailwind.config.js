/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				RazerF5: "'RazerF5', Tahoma, Arial, sans-serif;",
				RazerLight: "'RazerF5Light', Arial, Helvetica, sans-serif;",
				RazerBold: "'RazerF5Bold', Arial, Tahoma, sans-serif;",
				Roboto: "'Roboto', Arial, sans-serif;",
				RobotoBold: "'Roboto Black', sans-serif;",
			},
			colors: {
				primaryWhite: "#9a9a9a",
				secondaryWhite: "#888",
				primaryGreen: "#44d62c",
			},
		},
	},
	plugins: [],
};
