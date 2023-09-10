/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				RazerF5: "RazerF5,Tahoma,Arial,sans-serif;",
				normal: "Roboto,helvetica neue,Arial,noto sans,sans-serif",
			},
		},
	},
	plugins: [],
};
