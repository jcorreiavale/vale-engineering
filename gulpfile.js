const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application as well as publishing vendor resources.
 |
 */

elixir(function (mix) {
    mix.sass('app.scss');

    mix.styles([
        'components/tether-1.3.3/dist/css/tether.min.css',
        'components/bootstrap-4.0.0-alpha.5-dist/css/bootstrap-flex.min.css',
		'components/font-awesome-4.7.0/css/font-awesome.min.css',
        'components/DataTables-1.10.12/media/css/jquery.dataTables.css',
        'components/DataTables-1.10.12/media/css/dataTables.bootstrap4.css',
        'resources/assets/css/custom.css',
	], 'public/css/ourcss.css', '.')
        .styles([
            'components/jquery/jquery.min.js',
            'components/jquery-ui/jquery-ui.min.js',
            'components/tether-1.3.3/dist/js/tether.min.js',
            'components/bootstrap-4.0.0-alpha.5-dist/js/bootstrap.min.js',
            'components/DataTables-1.10.12/media/js/jquery.dataTables.js',
            'components/DataTables-1.10.12/media/js/dataTables.bootstrap4.js',
        ], 'public/js/ourjs.js', '.')
        .version([
            'public/css/ourcss.css',
            'public/js/ourjs.js'
        ], 'public');

});
