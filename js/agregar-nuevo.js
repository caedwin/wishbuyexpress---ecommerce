
let btnAdministrador = document.getElementById('boton_menu-admin');
let imagenUrl = document.getElementById('url-imagen');
let btnAgregarProducto = document.getElementById('btn_agregar_producto');
let btn_addCategoria = document.getElementById('btn_addCategoria');


btnAdministrador.addEventListener('click',function(){
    window.location.href = "http://127.0.0.1:5501/paginas/productos.html";
});

btnAgregarProducto.addEventListener('click', function(){
    addHumbnail();
});
btn_addCategoria.addEventListener('click', function(){
    window.location.href = "http://127.0.0.1:5501/paginas/categoria.html"; 
});

function crearImagen(){
    'use strict'

        const file = document.getElementById('file');
        file.addEventListener('change', function(){
            let previewImagen = document.getElementsByClassName('thumbnail').length;
            let imagenPermitida = 3;//recordar que la primera posición del array es cero

            if(previewImagen > imagenPermitida){
                document.querySelector('.error').innerHTML = 'Alcanzó la cantidad máxima de imágenes Permitidas';
                return;
            }else{
                document.querySelector('.error').innerHTML = '';
                const fileNumber = 4;
                
                for(var i = 0; i < file.files.length ; i++){
                    if(file.files.length > 4){
                        document.querySelector('.error').innerHTML = 'No es posible cargar la cantidad de imágenes seleccionada, por favor seleccione máximo 4';
                        return;
                    }else{
                        let thumbnail_id = Math.floor(Math.random()*30000) + '_' + Date.now();
                        createThumbnail(file, i, thumbnail_id);
                    };
                };
            }; 
        });

    let createThumbnail = function( file, interator, thumbnail_id){
        let thumbnail = document.createElement('div');
        thumbnail.classList.add('thumbnail', thumbnail_id);
        thumbnail.dataset.id = thumbnail_id;

        thumbnail.setAttribute('style', `background-image: url(${URL.createObjectURL(file.files[interator])})`)
        document.getElementById('preview-images').appendChild(thumbnail);
        createCloseButton(thumbnail_id)
    }


    let createCloseButton = function(thumbnail_id){
        let closeButton = document.createElement('div');
        closeButton.classList.add('close-button');
        closeButton.innerText = 'x'
        document.getElementsByClassName(thumbnail_id)[0].appendChild(closeButton)

    }
    document.body.addEventListener('click', function (e){
        if(e.target.classList.contains('close-button')){
            e.target.parentNode.remove();
            document.querySelector('.error').innerHTML = '';
        }
        e.target.value = '';
    })

    

}; crearImagen();









