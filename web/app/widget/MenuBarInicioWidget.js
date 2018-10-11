define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/on",
    "dijit/MenuBar",
    "dijit/PopupMenuBarItem",
    "dijit/MenuItem",
    "dijit/Menu",
    "dijit/Dialog",
    "/Proyecto/app/widget/LoginWidget.js",
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
         Dialog,
         LoginWidget,
         _WidgetBase,
         _TemplatedMixin,
         _WidgetsInTemplateMixin,
         Stateful,
         parser,
         template)
         {
        return declare([_WidgetBase,_TemplatedMixin,_WidgetsInTemplateMixin],{
            templateString:template,
            myDialogLogin: new Dialog({
                title:"Login",
                content:new LoginWidget()
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

