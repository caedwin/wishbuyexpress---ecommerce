/* <!**** ir a la página home-login ****> */
let botonLogin = document.getElementById('boton_login');

botonLogin.addEventListener('click', function(){
    window.location.href = "./paginas/home-login.html";
});

let botonBannerPromo = document.getElementById('botonPromocional');

botonBannerPromo.addEventListener('click',function(){
    moverseA("consola");
})

function moverseA(idDelElemento) {
    location.hash = "#" + idDelElemento;
}



