const { colors, textColor, width } = require('tailwindcss/defaultTheme')

module.exports = {
    theme: {
        screens: {
            sm: '640px',
            // => @media (min-width: 640px) { ... }

            md: '768px',
            // => @media (min-width: 768px) { ... }

            lg: '1024px',
            // => @media (min-width: 1024px) { ... }

            xl: '1280px',
            // => @media (min-width: 1280px) { ... }\
        },
        extend: {
            colors: {
                green: {
                    ...colors.green,
                    buttons: '#135B1C',
                    placeholder: '#ECEDEF',
                    'buttons-hover': '#1b7e28',
                    'form-text': '#C4C4C4',
                    'gold': '#F2B01E',
                    'text': '#4A4A4A',

                },
                gray: {
                    ...colors.gray,
                    750: '#9999994D',
                    'search-placeholder': '#999999',
                },
                textColor: {
                    yellow: {
                        ...textColor.green,
                        buttons: '#F2B01E',
                        form: '#C4C4C4',
                    },
                },
                width: {
                    background: '1260px',
                }
            },
        },
    },
    variants: {},
    plugins: [],
}
