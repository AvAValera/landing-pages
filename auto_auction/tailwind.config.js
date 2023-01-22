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
                "mob-590" : "590px",
                "main-1366" : "1366px",
                "arrow" : "1800px",
            },
            boxShadow: {
                servshadow: "-4px 4px 16px rgba(0, 0, 0, 0.1)"
            }
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
