
let eliminarProducto = document.getElementById("windows-eliminarProducto");
let btnCloset = document.getElementById("close-button");
let btnCesto = document.getElementById('imagen1');


/*<-- boton imagen cesto, muestra alerta solicitud eliminación de producto -->*/

btnCesto.addEventListener('click', function(){
    validarId();
   

})

function validarId(){
    eliminarProducto.style.visibility = "visible";
}


/*<-- boton cancelar solicitud de eliminación del producto -->*/
btnCloset.addEventListener('click', function(){
    eliminarProducto.style.visibility = "hidden";
});

function eliminarElemento(id){
	imagen = document.getElementById(id);	
	if (!imagen){
		alert("El elemento selecionado no existe");
	} else {
		padre = imagen.parentNode;
		padre.removeChild(imagen);
	}
}