define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojox/grid/DataGrid",
    "dojo/parser"],
function(
        declare,
         lang,
         _WidgetBase,
         _TemplatedMixin,
         _WidgetsInTemplateMixin,
         DataGrid,
         parser)
         {
        return declare([DataGrid],{
            
            structure:[{
                defaultCell : { width: "10%" },
                cells: [{ name: "Usuario", field: "usuario"},
                { name: "Nombre", field: "last"},
                { name: "Apellido Paterno", field: "apPat"},
                { name: "Apellido Materno", field: "apMat"},
                { name: "Correo", field: "correo", width: "70px" },
                { name: "Historial", field: "historial"}
                ]
            }],
 
            postCreate:function(){
                    var domNode = this.domNode;
                    this.inherited(arguments);
                console.log("En el postcreate");
            },
            constructor:function(args){
              lang.mixin(this, args);            
              console.log("En el constructor Grid");  
            }
            });
            parser.parse();
         });


