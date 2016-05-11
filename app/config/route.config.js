angular
    .module('app')
    .config(config);

function config($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/index');

    $stateProvider
        .state('index', {
            url:'/index',
            template: '<main></main>'
        })
            .state('profile', {
               parent:'index',
                url: '/profile',
                template: '<profile></profile>'
            })
                .state('tab_user_info', {
                    parent:'profile',
                    url: '/userinfo',
                    template: '<tab-user-info></tab-user-info>'
                })
                .state('tab_med_data', {
                   parent:'profile',
                    url: '/meddata',
                    template: '<tab-med-data></tab-med-data>'
                })
                .state('tab_apps', {
                    parent:'profile',
                    url: '/apps',
                    template: '<tab-apps></tab-apps>'
                })
                .state('tab_notification', {
                    parent:'profile',
                    url: '/notification',
                    template: '<tab-notification></tab-notification>'
                })
                .state('tab_change_pass', {
                    parent:'profile',
                    url: '/change_pass',
                    template: '<tab-change_pass></tab-change_pass>'
                })
}