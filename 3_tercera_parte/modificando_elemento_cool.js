//Estos son los nuevos metodos para modificar elementos en el DOOM
/*
insertAdjacent
    insertAdjacentElement(position,elemento); //agrega un elemento
    insertAdjacentHTML(position,html); //agrega contenido html
    insertAdjacentText(position,text); //agrega texto

Posiciones
    beforebegin(hermano anterior);
    afterbegin(primer hijo);
    beforeend(ultimo hijo);
    afterend(hermano siguiente);
*/

//insertAdjacentElement
const $cards = document.querySelector('.cards');
const $newCard = document.createElement('figure');
const $newCard2 = document.createElement('figure');
const $newCard3 = document.createElement('figure');
const $newCard4 = document.createElement('figure');

$newCard.innerHTML = `
<img src="https://picsum.photos/id/100/200/300" alt="img htm">
<figcaption>img hermano anterior</figcaption>
`;
$newCard2.innerHTML = `
<img src="https://picsum.photos/id/100/200/300" alt="img htm">
<figcaption>img Primer Hijo</figcaption>
`;
$newCard3.innerHTML = `
<img src="https://picsum.photos/id/100/200/300" alt="img htm">
<figcaption>img Ultimo Hijo</figcaption>
`;
$newCard4.innerHTML = `
<img src="https://picsum.photos/id/100/200/300" alt="img htm">
<figcaption>img hermano Posterior</figcaption>
`;
//en el contenedor cards agregamos como hermano anterior la nueva tarjeta
$cards.insertAdjacentElement('beforebegin',$newCard);
//en el contenedor cards agregamos como primer hijo la nueva tarjeta
$cards.insertAdjacentElement('afterbegin',$newCard2);
//en el contenedor cards agregamos como ultimo hijo la nueva tarjeta
$cards.insertAdjacentElement('beforeend',$newCard3);
//en el contenedor cards agregamos como hermano posterior la nueva tarjeta
$cards.insertAdjacentElement('afterend',$newCard4);


//insertAdjacentHTML y insertAdjacentText
const $newCard5 = document.createElement('figure');
let $contenCard= `
<img src="https://picsum.photos/id/100/200/300" alt="img htm">
<figcaption></figcaption>
`;
//agregamos como primer hijo y le pasamos contenido html
$newCard5.insertAdjacentHTML('afterbegin',$contenCard);
//recorremos la tarjeta y encontramos el figcation y usando insertAdjacentText agregamos el texto
$newCard5.querySelector('figcaption').insertAdjacentText("afterbegin",'img usando insertAdjacentHTML y insertAdjacentText ');
$cards.insertAdjacentElement('afterbegin',$newCard5); //lo agregamos al contenedor cards


//Otros metodos que podemos usar
const $newCard6 = document.createElement('figure');
$newCard6.innerHTML = `
<img src="https://picsum.photos/id/200/200/300" alt="img htm">
<figcaption>img Usando otros metodos</figcaption>
`;
//hermano anterio
//$cards.before($newCard6);

//hijo primero el nodo que pasemos como parametro
$cards.prepend($newCard6);

//ultimo hijo
//$cards.append($newCard6);

//hermano posterior
//$cards.after($newcards6);

