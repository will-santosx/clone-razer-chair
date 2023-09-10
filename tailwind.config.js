/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				RazerF5: "RazerF5, Tahoma, Arial, sans-serif;",
				RazerLight: "RazerF5Light, Arial, Helvetica, sans-serif;",
				RazerBold: "RazerF5Bold, Arial, Tahoma, sans-serif;",
				Normal: "Roboto, helvetica neue, Arial, noto sans, sans-serif;",
			},
		},
	},
	plugins: [],
};
