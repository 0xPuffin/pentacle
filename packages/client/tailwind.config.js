module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    important: true,
    theme: {
        extend: {
            colors: {
                'p-purple': 'rgb(59, 39, 120)',
                'p-green': 'rgb(50, 220, 169)',
                'p-pink': 'rgb(245, 176, 218)',
            },
        }
    }, 
    plugins: [require("daisyui")],
};
