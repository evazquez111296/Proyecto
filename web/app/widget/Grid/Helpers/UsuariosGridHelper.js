define(['dojo/_base/declare',
    'dojo/_base/lang',
    "dojo/dom-style",
    "dojo/domReady!"],
function(declare,
        lang,
        domStyle){
            return {
                formatColumTipoUsuario:function(column){
                 
                    column.renderCell = function (object, value, cell, options, headers) {
                        var div=document.createElement('div');
                        if(value=='1')
                            div.innerHTML='Alumno';
                        else
                            div.innerHTML='Profesor';
                        alinear(div);
                        div.style.setProperty("height","35px");
                        return div;
                    }
                    column.renderHeaderCell = function (node) {
                        var div = document.createElement('div');
                        div.innerHTML = column.label;
                        domStyle.set(div, "text-align", "center");
                        return div;
                    }
                return column;    
                },
                
                formatColumText:function(column){
                 
                    column.renderCell = function (object, value, cell, options, headers) {
                        var div=document.createElement('div');
                        div.innerHTML=value;
                        alinear(div);
                        div.style.setProperty("height","35px");
                        return div;
                    }
                    column.renderHeaderCell = function (node) {
                        var div = document.createElement('div');
                        div.innerHTML = column.label;
                        domStyle.set(div, "text-align", "center");
                        return div;
                    }
                return column;    
                },
                formatColumHistorial:function(column){
                 
                    column.renderCell = function (object, value, cell, options, headers) {
                        var div=document.createElement('div');
                        div.innerHTML='consultar';
                        alinear(div);
                        div.style.setProperty("height","35px");
                        return div;
                    }
                    column.renderHeaderCell = function (node) {
                        var div = document.createElement('div');
                        div.innerHTML = column.label;
                        domStyle.set(div, "text-align", "center");
                        return div;
                    }
                return column;    
                }
            };
               
});