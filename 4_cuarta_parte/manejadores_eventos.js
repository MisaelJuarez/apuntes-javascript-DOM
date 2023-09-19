function holaMundo() {
    alert('Hola Mundo');
}

//capturamos el boton que le daremos el evento
const $eventoSemantico = document.getElementById('evento-semantico');
//y lo igualamos a la funcion que queremos que se se ejecute a la hora de hacer click
$eventoSemantico.onclick = holaMundo;
//los eventos semanticos no puedes asignar diferentes funciones a un mismo evento
//este ejemplo solo ejecutara este evente y el anterior no
$eventoSemantico.onclick = (e) => {
    alert('Hola Mundo Manejador de eventos  Semantico');
    console.log(e);
}


//Manejador de eventos multiples : podemos asignarle varios eventos a un mismo elemento
//capturamos el btn que le daremos un evento
const $eventoMultiple = document.getElementById('evento-multiple');
//como primer parametro va el tipo de evento y como segundo la funcion que se ejecutara
$eventoMultiple.addEventListener('click',holaMundo); //podemos pasare una funcion definida

//y con esto podemos hacer que tengo un evento ese boton
$eventoMultiple.addEventListener('click', (e) => { //podemos crearle una funcion como segundo parametro
    alert('Hola Mundo con manejador de eventos multiples');
    console.log(e);
    console.log(e.type); //tipo de evento 
    console.log(e.target); //objeto que lo origina
});

//si necesitamos pasar parametros a un evento lo tendriamos que hacer de la siguiente forma
//creamos la funcion con el parametro correspondiente, y le asignamos un valor por defecto
function saludar(nombre='Desconocid@') {
    alert(`Hola ${nombre}`);
}
//tenemos que poner como segundo parametro del addEventListener una arrowfuncion 
//y ahi mandar a llamar a la funcion que queremos que se ejecuten
$eventoMultiple.addEventListener('click',() => {
    saludar();
    saludar('Misael');
});

//Para remover un evento de un boton lo podemos hacer de la siguiente manera
const $eventoRemover = document.getElementById('evento-remover'); //obtenemos el boton

const removerDobleClick = (e) => { //creamos una funcion
    alert(`Removiendo el evento de tipo ${e.type}`);
    console.log(e);
    //recibe dos parametros, el evento que vamos a remover y la funcion
    $eventoRemover.removeEventListener('dblclick',removerDobleClick);
    $eventoRemover.disabled = true; //propiedad de html para desactivar el boton
}
//le agregamos el evento doble click y la funcion que ejecutara cuando se haga doble click
$eventoRemover.addEventListener('dblclick',removerDobleClick);
















