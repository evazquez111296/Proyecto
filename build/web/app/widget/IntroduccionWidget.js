define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/parser",
    "dojo/domReady!"],
    function(
        declare,
        lang,
        _WidgetBase,
        _TemplateMixin,
        _WidgetInTemplateMixin,
        parser
        ){
        return declare([_WidgetBase,_TemplateMixin,_WidgetInTemplateMixin],{
            templateString: "<h1>Hola mundo de JS</h1>",
            
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