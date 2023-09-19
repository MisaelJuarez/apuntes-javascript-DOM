//capturamos todas las div de la section
const $divEventos = document.querySelectorAll('.eventos-flujo div'); 
console.log($divEventos);

function flujoEventos (e) { //creamos una funcion que se ejecutara cuando se haga click
    //imprimiremos la clase de la div que se va propagando y el evento que lo origino
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
    //e.stopPropagation(); //con esto podemos dasactivar la propagacion 
}

//si damos click en la 3 se imprimira 3 hola y caundo damos click en el 2 se imprimira 2 hola y cuando una una
//esto por la propagacion de eventos ya que a todos los div le dimos un evento click
$divEventos.forEach(div => { //de los div que capturamos por cada div que tiene
    //si no pasamos el tercer parametro por defcto es false
    //fase de burbuja si como tercer parametro es false : va del mas interno al mas externo
    //div.addEventListener('click',flujoEventos,false); //le asignamos un evento click
    //fase de captura si como tercer parametro le pasamos true: va del mas externo al mas interno
    //div.addEventListener('click',flujoEventos,true); //true como tercer parametro
    
    //tambien podemos como tercer parametro mandar un objeto
    div.addEventListener('click',flujoEventos, {
        capture: false, //tendra el flujo de burbuga normal
        once: true, //cuantas veces se ejecutara el evento true: una vez : false: las veces que sea
    });    
});

const $link = document.getElementById('link');

$link.addEventListener('click',(e)=> {
    alert('Hola, deteniendo la propagacion para que no nos habra yotube');
    //esta accion previene o detiene la accion que esta apunto de realizarce
    e.preventDefault();
    e.stopPropagation(); //con esto podemos dasactivar la propagacion 
});