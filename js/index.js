/* <!**** ir a la página home-login ****> */
let botonLogin = document.getElementById('boton_login');

botonLogin.addEventListener('click', function(){
    window.location.href = "http://127.0.0.1:5501/paginas/home-login.html";
});

let botonBannerPromo = document.getElementById('botonPromocional');

botonBannerPromo.addEventListener('click',function(){
    moverseA("consola");
})

function moverseA(idDelElemento) {
    location.hash = "#" + idDelElemento;
}



