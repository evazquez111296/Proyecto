define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/on",
    "dijit/Dialog",
    "dijit/form/Button",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/Stateful",
    "dojo/parser",
    "dojo/text!/Proyecto/app/widget/templates/ActionBars/ActionBarLoginWidget.html"],
function(
        declare,
         lang,
         on,
         Dialog,
         Button,
         _WidgetBase,
         _TemplatedMixin,
         _WidgetsInTemplateMixin,
         Stateful,
         parser,
         template)
         {
        return declare([_WidgetBase,_TemplatedMixin,_WidgetsInTemplateMixin],{
            templateString:template,
            _initWidget: function(){
            },
            postCreate:function(){
                    var domNode = this.domNode;
                    this.inherited(arguments);
                console.log("En el postcreate bar");
            },
            constructor:function(){
              console.log("En el constructor bar");  
            }
            });
            //parser.parse();
         });

