define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/_base/fx",
    "dojox/layout/TableContainer",
    "dijit/form/ValidationTextBox",
    "dijit/form/Button",
    "dijit/form/Form",
    "dijit/Dialog",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/parser",
    "dojo/text!/Proyecto/app/widget/templates/LoginWidget.html"],
function(
        declare,
         lang,
         fx,
         TableContainer,
         ValidationTextBox,
         Button,
         Form,
         Dialog,
         _WidgetBase,
         _TemplatedMixin,
         _WidgetsInTemplateMixin,
         parser,
         template)
         {
        return declare([_WidgetBase,_TemplatedMixin,_WidgetsInTemplateMixin],{
            templateString:template,
            postCreate:function(){
                    var domNode = this.domNode;
                    this.inherited(arguments);
                console.log("En el postcreate");
            },
            constructor:function(args){
              lang.mixin(this, args);
              /***
               * con LagMixin pasamos propiedades desde el widget padre.
               */                  
              console.log("En el constructor");  
            }
            
            });
            parser.parse();
         });