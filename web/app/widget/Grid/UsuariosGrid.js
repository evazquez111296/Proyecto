define([
    "dojo/_base/declare",
    "dojo/Stateful",
    "dgrid/OnDemandGrid",
    "dgrid/Grid",
    'dgrid/extensions/DijitRegistry',
    "dgrid/Selection",
    "dgrid/Editor",
    "dgrid/Keyboard",
    "dojo/dom-style",
    "dijit/form/ValidationTextBox",
    "dijit/form/CheckBox",
    "dijit/form/DateTextBox",
    "app/widget/Grid/Helpers/UsuariosGridHelper.js",
   "dojo/domReady!"
], function (
    declare,
    Stateful,
    OnDemandGrid,
    Dgrid,
    DijitRegistry,
    Selection,
    Editor,
    Keyboard,
    domStyle,
    ValidationTextBox,
    CheckBox,
    DateTextBox,
    UsuariosGridHelper
) {
    return declare([OnDemandGrid, Dgrid, DijitRegistry, Selection, Editor, Keyboard], {

        columns:[
            
            UsuariosGridHelper.formatColumText({field:'nombreUsuario', label:'Usuario'}),
            UsuariosGridHelper.formatColumText({field:'nombrePila', label:'Nombre de pila'}),
            UsuariosGridHelper.formatColumText({field:'apellidoPaterno', label:'Apellido paterno'}),
            UsuariosGridHelper.formatColumText({field:'apellidoMaterno', label:'Apellido materno'}),
            UsuariosGridHelper.formatColumText({field:'Fecha_Ingreso', label:'Fecha de ingreso'}),
            UsuariosGridHelper.formatColumText({field:'telefono', label:'Telefono'}),
            UsuariosGridHelper.formatColumText({field:'FechaNac', label:'Fecha de Nacimiento'}),
            UsuariosGridHelper.formatColumTipoUsuario({field:'tipo_usuario', label:'Tipo'}),
            UsuariosGridHelper.formatColumHistorial({field:'Historial', label:'Historial'})

        ],
        collection:null
    });
});