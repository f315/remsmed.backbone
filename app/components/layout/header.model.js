define([
    'jquery',
    'underscore',
    'backbone'
],function($, _, Backbone){
    var HeaderModel = Backbone.Model.extend({
        defaults: {
            date: '05.04.2016',
            time: '12:06 +03:00',
            username: 'Кузнецов Иван',
            role: 'Пациент'
        }
    });

    var headerModel = new HeaderModel();

    return headerModel;
})