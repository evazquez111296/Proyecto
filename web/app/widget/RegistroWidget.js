define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/dom-style",
    "dojo/on",
    "dojox/layout/TableContainer",
    "dijit/form/ValidationTextBox",
    "dijit/form/Button",
    "dijit/form/Select",
    "dijit/form/Form",
    "dojox/form/PasswordValidator",
    "dijit/form/DateTextBox",
    "dojox/form/FileInput",
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
         domStyle,
         on,
         TableContainer,
         ValidationTextBox,
         Button,
         Select,
         Form,
         PasswordValidator,
         DateTextBox,
         FileInputAuto,
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
            responseMessage:"",
            //Getters & Setters
            _tipoUsuarioGetter:function(){return this.tipoUsuario;},
            _tipoUsuarioSetter:function(value){this.tipoUsuario=value;},
            _responseMessageGetter:function(){return this.responseMessage;},
            _responseMessageSetter:function(value){this.responseMessage=value;},
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
            },
            isValid(){
                /**Valida que el contenido de los elementos del form
                 * cumplan con las restricciones con que se definieron.
                 */
                return this.formRegistroWidget.isValid();
            },
            _changeInnerHTMLResponseMessage(val){
                this.mensajeRespuesta.innerHTML=val;
            },
            changeResponseMessage(value){
                switch(value){
                    case "0":
                        this._changeInnerHTMLResponseMessage("Registro con éxito");
                        domStyle.set(this.mensajeRespuesta,"color","green");
                        break;
                    default:
                        this._changeInnerHTMLResponseMessage("Error");
                        domStyle.set(this.mensajeRespuesta,"color","red");
                        domStyle.set(this.mensajeRespuesta,"background-color","yellow");
                        break;
                }
                //this.set("responseMessage",value);
                //this.mensajeRespuesta.innerHTML=value;
            }
            
            });
            parser.parse();
         });
