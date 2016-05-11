define([
    'components/layout/header.model',
    'text!components/layout/header.template.tpl',
    'jquery',
    'underscore',
    'backbone',
    'toJson'
],function(Model, Template, $, _, Backbone, toJson){

    var HeaderView = Backbone.View.extend({
        el: $('#header'),
        template: _.template(Template),
        render: function () {
            this.$el.html(this.template(this.Model.toJSON())); //this.Model.toJSON()
            return this;
        },
        initialize: function(){
            this.render();
        }
    });

    var headerView = new HeaderView(); //{model: headerModel}


    return headerView;
})

