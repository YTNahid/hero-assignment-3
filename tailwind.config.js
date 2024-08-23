/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.{html,js}'],
    theme: {
        extend: {
            colors: {
                'primary-color': '#212121',
                'text-color-1': '#494949',
                'text-color-2': '#737373',
                'accent-color': '#ABEF5F',
            },
        },
    },
    plugins: [require('daisyui')],
};
