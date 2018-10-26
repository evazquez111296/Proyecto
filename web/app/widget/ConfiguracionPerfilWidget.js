define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/dom",
    "dojo/on",
    "dojo/parser",
    "dojo/dom-construct",
    "dijit/MenuBar",
    "dijit/layout/BorderContainer",
    "dijit/layout/LayoutContainer",
    "dijit/layout/ContentPane",
    "dijit/form/Form",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojox/form/PasswordValidator",
    "dojo/text!/Proyecto/app/widget/templates/ConfiguracionPerfilWidget.html",
    "dojo/domReady!"
    ],
    function(
        declare,
        lang,
        dom,
        on,
        parser,
        domConstruct,
        MenuBar,
        BorderContainer,
        LayoutContainer,
        ContentPane,
        Form,
        _WidgetBase,
        _TemplatedMixin,
        _WidgetsInTemplateMixin,
        PasswordValidator,
        template
        ){
        return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin],{
            templateString: template,
            
            _initWidget: function(){
                this.menuDatosPersonales.on("click",lang.hitch(this,function(){
                    domConstruct.place(
                        "<div id='menuConfigPerfilRep'>"+
                        /*"Remplazando por datos personales"+*/
                        
                        "</div>",
                    "menuConfigPerfilRep" ,"replace");
                    console.log("Click Datos personales");
                }));
                this.menuContraseña.on("click",lang.hitch(this,function(){
                    domConstruct.place(
                        "<div id='menuConfigPerfilRep'>"+
                        /*"Remplazando por contraseña"+*/
                            '<div data-dojo-type="dijit/form/Form" data-dojo-attach-point="formContraseña">'+
                                '<div data-dojo-type="dojox/form/PasswordValidator"'+
                                    'name="oldPassword">'+
                                    '<label>Contraseña actual: <input type="password" /></label><br>'+
                                '</div>'+
                                '<div data-dojo-type="dojox/form/PasswordValidator"'+
                                    'name="newPassword">'+
                                    '<label>Contraseña nueva: <input type="password" pwType="new" /></label><br>'+
                                    '<label>Repetir contraseña: <input type="password" pwType="verify" /></label><br>'+
                                '</div>'+
                            '</div>'+
                        "</div>",
                    "menuConfigPerfilRep" ,"replace");
                    console.log("Click contraseña");
                }));
                this.menuCorreo.on("click",lang.hitch(this,function(){
                    domConstruct.place(
                        "<div id='menuConfigPerfilRep'>"+
                        /*"Remplazando por correo"+*/
                            
                        "</div>",
                    "menuConfigPerfilRep" ,"replace");
                    console.log("Click correo");
                }));
                this.menuBaja.on("click",lang.hitch(this,function(){
                    domConstruct.place(
                        "<div id='menuConfigPerfilRep'>"+
                        /*"Remplazando por baja"+*/
                        
                        "</div>",
                    "menuConfigPerfilRep" ,"replace");
                    console.log("Click baja");
                }));
            },
            
            postCreate:function(){
                var domNode = this.domNode;
                this.inherited(arguments);
                this._initWidget();
                console.log("PostCreate de ConfigPerfil");
            },
            
            constructor:function(){
                console.log("Constructor de ConfigPerfil");
            }
        });
    }
);