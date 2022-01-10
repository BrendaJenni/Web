//Seleciono el documento
let formulario = document.getElementById("validacionjs");

window.onload = inciar;

function inciar(){
    document.getElementById("enviar").addEventListener('click',validar,false);
}

function validarnombre(){
    let elemento = document.getElementById("nombre");
    if (elemento.value == ""){
        alert("El campo no puede quedar vacío");
        error(elemento);
        return false;
    }
    return true;
}
function validarcorreo(){
    let elemento = document.getElementById("correo");
    if (elemento.value == ""){
        alert("El campo no puede quedar vacío");
        error(elemento);
        return false;
    }
    return true;
}
function validartelefono(){
    let elemento = document.getElementById("telefono");
    if (isNaN(elemento.value)){
        alert("El campo sólo debe contener números");
        error(elemento);
        return false;
    }
    return true;
}
function validar(e){
    if(validarnombre() && validartelefono() && validarcorreo()){
        return true;
    }else{
        e.preventDefault();
        return false;
    }
}
function error(elemento){
    elemento.className="error";
    elemento.focus();
}