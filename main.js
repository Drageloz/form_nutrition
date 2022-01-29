buttonSend = document.getElementById("send");
info = document.getElementById("results"); 
section = document.getElementById("info");
form = document.getElementById("form")

buttonSend.addEventListener("click", () =>{
    formData = new FormData(form);
    nombre = formData.get("nombre");
    apellido = formData.get("apellido");
    peso =  formData.get("peso");
    talla = formData.get("talla");
    info.innerHTML = '<h4>Su nombre es: ' + nombre + ' ' + apellido + '</h4>';
    info.innerHTML += '<h4>Su peso es: ' + peso + '</h4>';
    info.innerHTML += '<h4>Su talla es: ' + talla + '</h4>';
    info.innerHTML += '<h4>Su estado de nutricion está ' + estadoNutricion(peso) + '</h4>';
    section.className = ""
})

function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);


const estadoNutricion = (peso) =>{
    if(peso>12){
        return "adecuado";
    }
    else{
        return "por debajo del adecuado";
    }
}
