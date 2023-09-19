function flujoEventos (e) { 
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
}

//Le damos un evento a todo el documento
document.addEventListener('click',(e) => {
    console.log('Click en',e.target); //nos muestra las etiquetas o nodos donde damos click
    //matches compara con un selector valido
    //si el elemento que origina el evento es la etiqueta a que tiene el contenedor con el id eventos-Delegacion
    if (e.target.matches('.eventos-Delegacion a')) { //validara a true cuando presionemos el selector
        alert('Hola Mundo usando delegacion de eventos');
        e.preventDefault();
    }

    //si objeto que origina el evento es una div que esta dentro del contenedor eventos-Delegacion
    if (e.target.matches('.eventos-Delegacion div')) {
        flujoEventos(e);
    }
});

