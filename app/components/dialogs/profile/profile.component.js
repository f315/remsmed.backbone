angular
    .module('app')
    .component('profile', {
        templateUrl: 'app/components/dialogs/profile/profile.component.html',
        controller: function() {
            this.test = function() {
                console.log(1);
            };
        }
    });