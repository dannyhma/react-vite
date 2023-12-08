/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				Purple: "#5D50C6",
				Pink: "#F85E9F",
				Orange: "#FF5722",
				Yellow: "#FACD49",
				Gray: "#222831",
				Dark: "#191825",
				Whatsapp: "#25D366",
				Instagram: "#E4405F",
				Facebook: "#0866FF",
				Twitter: "#000000",
				Discord: "#5865F2",
				Linkedin: "#0A66C2",
				Figma: "#F24E1E"
			},
			boxShadow: {
				smshadow: [
					"0px 0px 0px 0px rgba(0, 0, 0, 0.07)",
					"0px 34px 75px 0px rgba(0, 0, 0, 0.07)",
					"0px 137px 137px 0px rgba(0, 0, 0, 0.06)",
					"0px 308px 185px 0px rgba(0, 0, 0, 0.04)",
					"0px 548px 219px 0px rgba(0, 0, 0, 0.01)",
					"0px 856px 240px 0px rgba(0, 0, 0, 0.00)"
				],
				buttonshadow: [
					"0px 0px 0px 0px rgba(0, 0, 0, 0.10)",
					"0px 5px 11px 0px rgba(0, 0, 0, 0.10)",
					"0px 20px 20px 0px rgba(0, 0, 0, 0.09)",
					"0px 45px 27px 0px rgba(0, 0, 0, 0.05)",
					"0px 81px 32px 0px rgba(0, 0, 0, 0.01)",
					"0px 126px 35px 0px rgba(0, 0, 0, 0.00)"
				],

				buttonshadow2: [
					"0px 0px 0px rgba(0, 0, 0, 0.08)",
					"0px 7px 16px rgba(0, 0, 0, 0.07)",
					"0px 29px 29px rgba(0, 0, 0, 0.06)",
					"0px 65px 39px rgba(0, 0, 0, 0.04)",
					"0px 116px 46px rgba(0, 0, 0, 0.01)",
					"0px 181px 51px rgba(0, 0, 0, 0.00)"
				],
				cardshadow: ["0px 0px 0px 0px rgba(0, 0, 0, 0.10)", "0px 2px 89px 0px rgba(0, 0, 0, 0.10)"],
				cardshadow2: [
					"0px 0px 0px 0px rgba(0, 0, 0, 0.05)",
					"0px 32px 71px 0px rgba(0, 0, 0, 0.05)",
					"0px 128px 128px 0px rgba(0, 0, 0, 0.04)",
					"0px 288px 173px 0px rgba(0, 0, 0, 0.03)",
					"0px 513px 205px 0px rgba(0, 0, 0, 0.01)",
					"0px 801px 224px 0px rgba(0, 0, 0, 0.00)"
				]
			}
		}
	},
	plugins: []
}
