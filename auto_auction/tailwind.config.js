/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "main-color": "#3579F4",
            },
            screens : {
                "mob-590" : "590px"
            }
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
