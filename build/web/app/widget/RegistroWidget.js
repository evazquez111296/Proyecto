define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/on",
    "dojox/layout/TableContainer",
    "dijit/form/ValidationTextBox",
    "dijit/form/Button",
    "dijit/form/Select",
    "dijit/form/Form",
    "dojox/validate/web",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/Stateful",
    "dojo/parser",
    "dojo/text!/Proyecto/app/widget/templates/RegistroWidget.html"],
function(
        declare,
         lang,
         on,
         TableContainer,
         ValidationTextBox,
         Button,
         Select,
         Form,
         web,
         _WidgetBase,
         _TemplatedMixin,
         _WidgetsInTemplateMixin,
         Stateful,
         parser,
         template)
         {
        return declare([_WidgetBase,_TemplatedMixin,_WidgetsInTemplateMixin],{
            templateString:template,
            tipoUsuario:null,
            //Getters & Setters
            _tipoUsuarioGetter:function(){return this.tipoUsuario;},
            _tipoUsuarioSetter:function(value){this.tipoUsuario=value;},
            
            _initWidget: function(){
                this.tipoUsuarioWidget.on('change',lang.hitch(this,function(){
                        this.set("tipoUsuario",this.tipoUsuarioWidget.value);
                }));
                this.watch("tipoUsuario",function(name,oldValue,value){
                        console.log("hola:"+value);
                });
            },
            postCreate:function(){
                    var domNode = this.domNode;
                    this.inherited(arguments);
                    var context=this;
                    this._initWidget();
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
