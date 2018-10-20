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
) {
    return declare([OnDemandGrid, Dgrid, DijitRegistry, Selection, Editor, Keyboard], {

        columns:[
            
            {field:'nombreUsuario', label:'Usuario'},
            {field:'nombrePila', label:'Nombre de pila'},
            {field:'apellidoPaterno', label:'Apellido paterno'},
            {field:'apellidoMaterno', label:'Apellido materno'},
            {field:'Fecha_Ingreso', label:'Fecha de ingreso'},
            {field:'telefono', label:'Telefono'},
            {field:'FechaNac', label:'Fecha de Nacimiento'},
            {field:'Historial', label:'Historial'}
        ]
    });
});