define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/dom-construct",
    "dojo/dom",
    "dojox/layout/TableContainer",
    "dijit/layout/BorderContainer",
    "dijit/layout/ContentPane",
    "dijit/form/ValidationTextBox",
    "dijit/form/Button",
    "dijit/form/Form",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/parser",
    "/Proyecto/app/widget/MenuBarInicioWidget.js",
    "/Proyecto/app/widget/IntroduccionWidget.js",
    "dojo/text!/Proyecto/app/widget/templates/PagPrincipalWidget.html",
    "dojo/domReady!"],
        function(
            declare,
            lang,
            domConstruct,
            dom,
            TableContainer,
            BorderContainer,
            ContentPane,
            ValidationTextBox,
            Button,
            Form,
            _WidgetBase,
            _TemplateMixin,
            _WidgetInTemplateMixin,
            parser,
            MenuBarInicioWidget,
            IntroduccionWidget,
            template){
                return declare([_WidgetBase, _TemplateMixin, _WidgetInTemplateMixin],{
                    templateString: template,
                    postCreate:function(){
                        var domNode = this.domNode;
                        this.inherited(arguments);
                        var d=domNode.introduccionDiv;

                        this._createTopPane();
                        this._createCenterPane();
                        //this._createBottonPane();
                        console.log("En el postcreate");
                        //domConstruct.place("<h1>Hola mundo</h1>","introduccionDiv");

                    },
                    constructor:function(){
                      console.log("En el constructor"); 
                    },
                    _createTopPane(){
                        var menuBar = new MenuBarInicioWidget();
                        this.topPaneWidget.addChild(menuBar);
                    },
                    _createCenterPane(){
                        var introduccion = new IntroduccionWidget();
                        this.centerPaneWidget.addChild(introduccion);
                        /*
                         * Aquí deberia ir la introduccion.
                         */
                    },
                    _createBottonPane(){
                        
                    }
                });
            }
);