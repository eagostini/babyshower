let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');

mix.autoload({
   react: ['React']
});

mix.copy('resources/assets/fonts/*', 'public/fonts');
mix.copy('resources/assets/js/particles.json', 'public/js/particles.json');

mix.extract([
    'react',
    'react-dom'
], 'public/js/vendor.js').version();

mix.sass('resources/assets/sass/app.scss', 'public/css/app.css').options({
    postCss: [
        tailwindcss('tailwind.js')
    ],
    processCssUrls: false
});

mix.react('resources/assets/js/app.jsx', 'public/js');
mix.sourceMaps();
mix.version();
