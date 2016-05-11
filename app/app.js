requirejs.config({
    baseUrl: 'app',
    paths: {
        'jquery': '../assets/js/jquery-1.8.3',
        'underscore': 'underscore-min',
        'backbone': 'backbone-min',
        'toJson': 'json2',
        'text': 'text'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }

    }
});

require(["jquery", "components/layout/header.model", "components/layout/header.view"], function () {
    $(document).ready(function() {
        /*var headerView = new HeaderView();
        headerView.init();*/
    });
});



