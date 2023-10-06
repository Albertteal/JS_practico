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




    if (inputHerbolestero.checked){      
        alert("Seleccionate Herbolestero")
    } else if (inputMonje.checked){
        alert("Seleccionate Monje")
    } else if (inputCataclismo.checked){
        alert("Seleccionate Cataclismo")
    } else if (inputNagas.checked){
        alert("Seleccionate Nagas")
    } else if (inputTauren.checked){
        alert("Seleccionate Tauren")
    } else if (inputHydros.checked){
        alert("Seleccionate Hydros")
    } else if (inputPaladin.checked){
        alert("Seleccionate Paladin")
    } else{
        alert("Selecciona una clase")
    }
}
window.addEventListener('load', iniciarJuego) //Nos sirve oara avisar que inicie todo cuando ya se haya cargado
                                                //Todo el HTML y ahora sí pasamos al JS
