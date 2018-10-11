define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/on",
    "dijit/MenuBar",
    "dijit/PopupMenuBarItem",
    "dijit/MenuItem",
    "dijit/Menu",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/Stateful",
    "dojo/parser",
    "dojo/text!/Proyecto/app/widget/templates/MenuBarInicioWidget.html"],
function(
        declare,
         lang,
         on,
         MenuBar,
         PopupMenuBarItems,
         MenuItem,
         Menu,
         _WidgetBase,
         _TemplatedMixin,
         _WidgetsInTemplateMixin,
         Stateful,
         parser,
         template)
         {
        return declare([_WidgetBase,_TemplatedMixin,_WidgetsInTemplateMixin],{
            templateString:template,
            postCreate:function(){
                    var domNode = this.domNode;
                    this.inherited(arguments);
                console.log("En el postcreate menu");
            },
            constructor:function(){
              console.log("En el constructor menu");  
            }
            });
            //parser.parse();
         });

