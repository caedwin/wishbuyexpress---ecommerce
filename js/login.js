let userName = document.getElementById('email');
let passwordUser = document.getElementById('password');
let accedoDenegado = document.getElementById('accesoDenegado');
let validacion = document.getElementById('validacion');
let btnRegistrarUsuario = document.getElementById('boton__registraUsuario');

btnRegistrarUsuario.addEventListener('click', function(){

    //window.location.href = "http://127.0.0.1:5501/paginas/productos.html";
    
    validarCampo();
});


function validarCampo(){
    if(userName.value =="" || passwordUser.value ==""){
       accedoDenegado.innerHTML = 'No puede haber campos en blanco';
       
    };
};


userName.addEventListener('blur', function() {

    if(userName.value == ""){
        validacion.style.visibility = 'hidden'
    }else{
        passwordUser.value = '';
        campo = event.target;
        valido = document.getElementById('validacion');
        
        emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
       
        if (emailRegex.test(campo.value)) {
            validacion.style.visibility = 'visible';
            validacion.src = '../imagenes/checkboxAccept.png';
        } else {
            validacion.style.visibility = 'visible';
            validacion.src = '../imagenes/accessDenegado.png';
        };
    };

});

passwordUser.addEventListener('focus', function(){
    accedoDenegado.innerHTML = '';
})
userName.addEventListener('focus', function(){
    passwordUser.value = '';
    
} )
