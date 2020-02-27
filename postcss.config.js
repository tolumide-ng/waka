// const tailwindcss = require('tailwindcss')
// const autoprefixer = require('autoprefixer')
// require('dotenv').config()
// const purgecss = require('@fullhuman/postcss-purgecss')({
//     // Specifyy the paths to all the template files in your project
//     content: ['./src/*.html', '.src/**/*.jsx'],
//     defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
// })

// module.exports = {
//     plugins: [
//         tailwindcss,
//         autoprefixer,
//         ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
//     ],
// }

const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
require('dotenv').config()

module.exports = {
    plugins: [tailwindcss, autoprefixer],
}
