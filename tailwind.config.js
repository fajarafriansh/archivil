const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: ['./storage/framework/views/*.php', './resources/views/**/*.blade.php', './resources/js/**/*.vue'],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
                inter: ['Inter']
            },
            fontSize: {
                'h2': '2rem'
            },
            colors: {
                // Light Color Palettes
                'main-color': '#fff',
                'white-100': 'rgba(255, 255, 255, 0.1)',
                'white-200': 'rgba(255, 255, 255, 0.2)',
                'white-400': 'rgba(255, 255, 255, 0.4)',
                'white-500': 'rgba(255, 255, 255, 0.5)',
                'white-600': 'rgba(255, 255, 255, 0.6)',
                'white-900': 'rgba(255, 255, 255, 0.9)',
                'base-color': '#000',
                'base-color1': 'rgba(0, 0, 0, 0.95)',
                'base-color2': 'rgba(0, 0, 0, 0.70)',
                'base-color3': 'rgba(0, 0, 0, 0.4)',
                'base-color4': '#e5e5e5',
                'base-color5': 'rgba(0, 0, 0, 0.05)',
                'base-color6': 'rgba(0, 0, 0, 0.02)',

                // Accent color
                'blue-color': '#007aff',
                'blue-color1': '#5ac8fa',
                'blue-color2': 'rgba(0, 122, 255, 0.1)',
                'gray-color': '#8e8e93',
                'green-color': '#34c759',
                'red-color': '#ff3b30',
                'orange-color': '#ff9500',
                'indigo-color': '#5856d6',
                'purple-color': '#af52de',
                'pink-color': '#ff2d55',

                'navbar-color': '#212121',
                'body-color': '#f2f2f6'
            },
            opacity: {
                '85': '.85'
            },
            inset: {
                '2': '.5rem',
                '3': '.75rem',
                '4': '1rem',
                '6': '1.5rem',
                '8': '2rem',
                '10': '2.5rem',
                '100': '100%'
            },
            spacing: {
                '6px': '6px',
                '10px': '10px',
                '15': '3.75rem',
                '40': '10rem',
                '70': '17.5rem',
                '75': '18.75rem'
            },
            minHeight: {
                '11': '2.75rem'
            },
            borderRadius: {
                'xl': '10px'
            }
        },
    },

    variants: {
        opacity: ['responsive', 'hover', 'focus', 'disabled'],
    },

    plugins: [require('@tailwindcss/ui')],
};
