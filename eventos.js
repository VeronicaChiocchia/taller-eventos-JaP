let buttonDiv = document.getElementById("button-div");

function setAlert(event) {
    alert("Hola, soy el Div!");
}

function setButtonAlert(event){
    event.stopPropagation();
    alert("Hola, vengo a saludar, soy un Botón.");
}

buttonDiv.addEventListener("click", setAlert);