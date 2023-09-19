const $cards = document.querySelector('.cards');
const $newCard = document.createElement('figure'); //creamos una nueva etiqueta
const $newCard2 = document.createElement('figure'); 
//le ponemos a la etiqueta que creamos de figure la img y el figcaption con innerHTML
$newCard.innerHTML = `
<img src="https://picsum.photos/id/100/200/300" alt="img htm">
<figcaption>img que remplazo a otra</figcaption>
`;
$newCard2.innerHTML = `
<img src="https://picsum.photos/id/110/200/300" alt="img htm">
<figcaption>img que se agrego </figcaption>
`;

//metodo para remplazar un elemento por otro
// recibe dos parametros, el nuevo elemento y el elmento a remplazar
$cards.replaceChild($newCard,$cards.children[2]);

//insertar un elemento antes de un nodo que tomemos como referencia
//recibe dos parametros el nuevo nodo y el nodo de referencia 
//no lo va a remplazar sinplemente lo usa a modo de referencia donde se va agregar
$cards.insertBefore($newCard2,$cards.firstElementChild);

//metodo para eliminar, recibe el nodo que vamos a eliminar
$cards.removeChild($cards.lastElementChild);

//formar de clonar toda la estructura de un nodo
//es cloneNode y recibe true si queremos toda la estructura o false si solo la etiqueta del contenedor
const $cloneCards = $cards.cloneNode(true);
document.write('<h2>Clonando todas las tarjeta con cloneNode</h2>');
document.body.appendChild($cloneCards); //agregamos e clone al body


