buttonSend = document.getElementById("send");
info = document.getElementById("results"); 
section = document.getElementsByClassName("d-none");

buttonSend.addEventListener("click", () =>{
    formData = new FormData(document.getElementById("form"));
    nombre = formData.get("nombre");
    apellido = formData.get("apellido");
    peso =  formData.get("peso");
    talla = formData.get("talla");
    info.innerHTML = '<h4>Su nombre es: ' + nombre + ' ' + apellido + '</h4>';
    info.innerHTML += '<h4>Su peso es: ' + peso + '</h4>';
    info.innerHTML += '<h4>Su talla es: ' + talla + '</h4>';
    info.innerHTML += '<h4>Su estado de nutricion está ' + estadoNutricion(peso) + '</h4>';
    section[0].className = ""
})


const estadoNutricion = (peso) =>{
    if(peso>50){
        return "adecuado";
    }
    else{
        return "por debajo del adecuado";
    }
}
