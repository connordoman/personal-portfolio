/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            lato: ["Lato", "sans-serif"],
            comic: ["Comic\\ Sans\\ MS", "Comic\\ Sans", "Chalkboard", "Chalkboard\\ SE", "cursive"],
            lora: ["Lora", "serif"],
        },
        extend: {
            screens: {
                print: { raw: "print" },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [
        require("@tailwindcss/aspect-ratio"),
        // ...
    ],
};
