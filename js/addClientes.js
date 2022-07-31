let nombre = document.getElementById("username");
let apellido = document.getElementById("lastname");
let email = document.getElementById("email");
let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");
let accedoDenegado = document.getElementById("accesoDenegado");
let validacionEmail = document.getElementById("validacion_email");
let validacionPassword1 = document.getElementById("validacion_password1");
let validacionPassword2 = document.getElementById("validacion_password2");

let btnRegistrarUsuario = document.getElementById("boton__registraUsuario");
let btn_verpassword = document.getElementById("ojopassword");

btnRegistrarUsuario.addEventListener("click", function () {
 
});

function validarCampos() {
  if (
    nombre.value == "" ||
    apellido.value == "" ||
    email.value == "" ||
    password1.value == "" ||
    password2.value == ""
  ) {
    accedoDenegado.innerHTML =
      "Todos los campos son obligatorios, Complete los campos que están vacíos";
  } else {
    accedoDenegado.innerHTML = "";
  }
}

nombre.addEventListener("blur", function () {
  accedoDenegado.innerHTML = "";
});

email.addEventListener("blur", () => {
  campo = event.target;
  valido = document.getElementById("validacion");
  if (email.value == "") {
    validacion.style.visibility = "hidden";
  } else {
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailRegex.test(campo.value)) {
      validacionEmail.style.visibility = "visible";
      validacionEmail.src = "../imagenes/checkboxAccept.png";
    } else {
      validacionEmail.style.visibility = "visible";
      validacionEmail.src = "../imagenes/accessDenegado.png";
    }
  }
});

password1.addEventListener("blur", function () {
  if (password1.value.length < 8 || password1.value.length > 16) {
    alert("Debe tener más de 8 y menos de 16 caracteres");
    return;
  }
  let passwordRegex =
    /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})\S{8,}$/i;
  if (passwordRegex.test(password1.value)) {
    validacionPassword1.src = "../imagenes/checkboxAccept.png";
    validacionPassword1.style.visibility = "visible";
  } else {
    validacionPassword1.src = "../imagenes/accessDenegado.png";
    validacionPassword1.style.visibility = "visible";
  }
});

password2.addEventListener("blur", function () {
  if (password1.value == password2.value) {
    validacionPassword2.src = "../imagenes/checkboxAccept.png";
    validacionPassword2.style.visibility = "visible";
  } else {
    validacionPassword2.src = "../imagenes/accessDenegado.png";
    validacionPassword2.style.visibility = "visible";
  }
});

btn_verpassword.addEventListener("keypress", function () {
  password1.type = "text";
});
