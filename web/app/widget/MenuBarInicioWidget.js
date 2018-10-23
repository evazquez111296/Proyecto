define([
    "dojo/_base/declare",
    "dijit/registry",
    "dojo/request/xhr",
    "dojo/request/iframe",
    "dojo/when",
    "dojo/dom",
    "dojo/dom-form",
    "dojo/dom-style",
    "dojox/widget/Standby",
    "dojo/_base/lang",
    "dojo/Stateful",
    "dojo/on",
    "dijit/MenuBar",
    "dijit/PopupMenuBarItem",
    "dijit/MenuItem",
    "dijit/Menu",
    "dijit/Dialog",
    "/Proyecto/app/widget/LoginWidget.js",
    "/Proyecto/app/widget/RegistroWidget.js",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/Stateful",
    "dojo/parser",
    "dojo/text!/Proyecto/app/widget/templates/MenuBarInicioWidget.html",
    "dojo/domReady!"],
function(
        declare,
        registry,
        request,
        iframe,
        when,
        dom,
        domForm,
        domStyle,
        Standby,
         lang,
         Stateful,
         on,
         MenuBar,
         PopupMenuBarItems,
         MenuItem,
         Menu,
         Dialog,
         LoginWidget,
         RegistroWidget,
         _WidgetBase,
         _TemplatedMixin,
         _WidgetsInTemplateMixin,
         Stateful,
         parser,
         template)
         {
        return declare([_WidgetBase,_TemplatedMixin,_WidgetsInTemplateMixin],{
            
            templateString:template,//Indica el cascaron del Widget, la parte del html.
            
            myDialogLogin: new Dialog({
                title:"Login",
                content:new LoginWidget()
            }),
            
            myDialogRegistro: new Dialog({
               title:"Registro",
               content: new RegistroWidget(),
               style:'width:33%!important'
            }),
            
            _initWidget: function(){
                this.menuItemIniciarSession.on("click",lang.hitch(this,function(){
                    /**
                     * La llamada a lang.hitch(scope,method) permite interactuar
                     * con un contexto anterior.
                     */
                    this.myDialogLogin.show();

                    console.log("click menu session");
                }));
                
                this.menuItemRegistrarse.on("click",lang.hitch(this,function(){
                    this.myDialogRegistro.show();

                    console.log("Pop up Registro");
                }));
                
                this.menuItemUnirmeGrupo.on("click",lang.hitch(this,function(){
                    console.log("click Unirme a grupo");
                }));
                
                this.myDialogLogin.content.btnLoginCancelar.on("click",lang.hitch(this,function(){
                    this.myDialogLogin.hide();
                    /**
                     * 
                     * Cerramos el cuadro de dialogo.
                     */
                }));
                this.myDialogLogin.content.btnLogear.on("click",lang.hitch(this,function(){
                    if(!this.myDialogLogin.content.myFormLoginWidget.isValid()){
                        window.alert("Los campos son obligatorios");
                    }else{
                        /****
                         * Aquí ira la llamada AJAX que 
                         * traera el perfil del usuario logeado.
                         */
                        var deferred;
                    }
                }));
                
                this.myDialogRegistro.content.btnRegistroCancelar.on("click",lang.hitch(this,function(){
                    this.myDialogRegistro.hide();
                    /**
                     * 
                     * Cerramos el cuadro de dialogo.
                     */
                }));
                this.myDialogRegistro.content.btnRegistrarse.on("click",lang.hitch(this,function(){
                    if(!this.get("myDialogRegistro").content.isValid()){
                        window.alert("Los campos son obligatorios");
                    }else{
                        //formRegistroWidget
                        var form=dom.byId("formRegistroUsuario");
                        var deferred=request.post("http://localhost:8084/ElectroESCOM_API/RegistroUsuarioController",{
                            data:domForm.toObject("formRegistroUsuario"),
                            handleAs:'text'
                        });
                        var context=this;
                        when(deferred,function(value){
                            //alert(value);
                            context.get("myDialogRegistro").content.changeResponseMessage(value);
                        });
                        
                    }
                }));
            },

            postCreate:function(){
                    var domNode = this.domNode;
                    this.inherited(arguments);
                    this._initWidget();
                console.log("En el postcreate menu");
            },
            constructor:function(){
              console.log("En el constructor menu");  
            }
            });
            //parser.parse();
         });

