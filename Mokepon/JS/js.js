function iniciarJuego(){
    let botonClaseJugador = document.getElementById('boton-selec-clase')
    botonClaseJugador.addEventListener('click', SeleccionarClaseJugador)
}

function SeleccionarClaseJugador(){
    let inputHerbolestero = document.getElementById('Herbolestero')
    let inputMonje = document.getElementById('Monje')
    let inputCataclismo = document.getElementById('Cataclismo')
    let inputNagas = document.getElementById('Nagas')
    let inputTauren = document.getElementById('Tauren')
    let inputHydros = document.getElementById('Hydros')
    let inputPaladin = document.getElementById('Paladin')

    let spanclaseJugador = document.getElementById('claseJugador')




    if (inputHerbolestero.checked){   
        spanclaseJugador.innerHTML = "Herbolestero"   //Hacemos que el nombre cambie conforme a la mascota para la parte de vidas
        alert("Seleccionate Herbolestero")
    } else if (inputMonje.checked){
        spanclaseJugador.innerHTML = "Monje"
        alert("Seleccionate Monje")
    } else if (inputCataclismo.checked){
        spanclaseJugador.innerHTML = "Cataclismo"
        alert("Seleccionate Cataclismo")
    } else if (inputNagas.checked){
        spanclaseJugador.innerHTML = "Nagas"
        alert("Seleccionate Nagas")
    } else if (inputTauren.checked){
        spanclaseJugador.innerHTML = "Tauren"
        alert("Seleccionate Tauren")
    } else if (inputHydros.checked){
        spanclaseJugador.innerHTML = "Hydros"
        alert("Seleccionate Hydros")
    } else if (inputPaladin.checked){
        spanclaseJugador.innerHTML = "Paladin"
        alert("Seleccionate Paladin")
    } else{
        alert("Selecciona una clase")
    }
}
window.addEventListener('load', iniciarJuego) //Nos sirve oara avisar que inicie todo cuando ya se haya cargado
                                                //Todo el HTML y ahora sí pasamos al JS
