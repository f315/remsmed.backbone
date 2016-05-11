angular
    .module('app')
    .component('tabUserInfo', {
        templateUrl:'app/components/dialogs/profile/tabUserInfo.component.html',
        require: {
            ngModel: '?ngModel',
            parent: '?profile'
        },
        controller: function($scope){
            debugger;
            this.parent.test();
            this.$onInit = function () {
                this.parent.test(); // 'Foo from parent!'
            };
        }
    })

