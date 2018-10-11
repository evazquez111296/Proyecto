define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojox/layout/TableContainer",
    "dijit/layout/BorderContainer",
    "dijit/layout/AccordionContainer",
    "dijit/layout/ContentPane",
    "dijit/form/ValidationTextBox",
    "dijit/form/Button",
    "dijit/form/Form",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/parser",
    "/Proyecto/app/widget/MenuBarInicioWidget.js",
    "/Proyecto/app/widget/RegistroWidget.js",
    "dojo/text!/Proyecto/app/widget/templates/InicioWidget.html",
    "dojo/domReady!"],
function(
        declare,
         lang,
         TableContainer,
         BorderContainer,
         AccordionContainer,
         ContentPane,
         ValidationTextBox,
         Button,
         Form,
         _WidgetBase,
         _TemplatedMixin,
         _WidgetsInTemplateMixin,
         parser,
         MenuBarInicioWidget,
         RegistroWidget,
         template)
         {
        return declare([_WidgetBase,_TemplatedMixin,_WidgetsInTemplateMixin],{
            templateString:template,
            postCreate:function(){
                    var domNode = this.domNode;
                    this.inherited(arguments);
                    this._createTopPane();
                    this._createRightPane();
                console.log("En el postcreate");
            },
            constructor:function(){
              console.log("En el constructor"); 
              
            },
            _createTopPane:function(){
                var menuBar=new MenuBarInicioWidget();
                this.topPaneWidget.addChild(menuBar);
                //login.startup();
                //this.topPaneWidget.resize();
            },
            _createRightPane: function (){
              var  registro=new RegistroWidget({title:'Registro De Usuario'});
              this.rightPaneWidget.addChild(registro);
            }
            
            });
            parser.parse();
         });


