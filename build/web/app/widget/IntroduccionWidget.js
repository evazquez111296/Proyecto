define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/parser",
    "dojo/text!/Proyecto/app/widget/templates/InicioWidget.html",
    "dojo/domReady!"],
    function(
        declare,
        lang,
        _WidgetBase,
        _TemplateMixin,
        _WidgetInTemplateMixin,
        parser,
        template){
        return declare([_WidgetBase,_TemplateMixin,_WidgetInTemplateMixin],{
            tamplateString: template,
            
            postCreate:function(){
                var domNode = this.domNode;
                this.inherited(arguments);
                console.log("En el postcreate");
            },
            constructor:function(){
                console.log("En el constructor introducción");
            }
        });
    }
);