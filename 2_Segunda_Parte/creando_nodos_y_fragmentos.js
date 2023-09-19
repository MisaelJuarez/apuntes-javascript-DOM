// CREANDO NODOS 
const $figure = document.createElement('figure'); // creando un elemeno
const $img = document.createElement('img');
const $figcaption = document.createElement('figcaption');
const $figcaptionText = document.createTextNode('Animals (desde js)'); // creando un elemento texto
const $cards = document.querySelector('.cards');

$img.setAttribute('src','http://placeimg.com/200/200/animals'); //agregamos el atributo url al img
$img.setAttribute('alt','Animals'); //agregamos el atributo alt al img

//a la etiquea figcaption agregale el nodo figcaptionText, el cual contiene el texto
$figcaption.appendChild($figcaptionText);

//agregamos a la etiqueta figure, la etiqueta img y figcaption, las cuales ya estaban creadas
$figure.appendChild($img);
$figure.appendChild($figcaption);

//agregamos un elemento creado al elemento cards
$cards.appendChild($figure);

//Tambien podemos crear nodos dinamicamente de esta forma
const $figure2 = document.createElement('figure'); // creamos otra etiqueta figure
//con la propiedad innerHtml podemos colocar dentro las etiquetas que estaran dentro de la figure
//la desventaja es que no estas creando un nodo html, solo es visualizcion.
$figure2.innerHTML = `
<img src="http://placeimg.com/200/200/peple" alt="Peple">
<figcaption>Peple (desde js)</figcaption>
`;

$card.appendChild($figure2) //agregamos la nueva figure al elemento cards

// CREANDO CONTENIDO DINAMICO

const estaciones = ['Primavera','Verano','Otoño','Invierno'];
const $ul = document.createElement('ul');
//agregamos al body nuestra etiqueta creada ul  
document.body.appendChild($ul);
//recorremos el array
estaciones.forEach(estacion => { //por cada elemento del arreglo
    const $li = document.createElement('li'); //creame un li
    $li.textContent = estacion; //agregame la estacion al li
    $ul.appendChild($li); //y al ul ya creado, agregale el li
});

//otra forma de crear contenido dinamico usando innerHtml
// la desventaja es que no estamos creando nodos solo es visual
const continentes = ['Africa','America','Asia','Europa','Oceania'];
const $ul2 = document.createElement('ul');

document.write('<h3>Contientes del Mundo</h3>');
document.body.appendChild($ul2);
$ul2.innerHTML = "";
//de esta forma podemos crear contenido dinamico usando innerHtml
continentes.forEach(continente => $ul2.innerHTML += `<li>${continente}</li>`);

// CREANDO CONTENIDO DINAMICO CON FRAGMENTOS
/*los fragmentos son variables del DOM, nos ayudan para cuando creamos contenido dinamico no estemos
haciendo inserciones al DOM por cada iteracion, si no todo al fragmento y de ahi podemos hacer una 
solo insercion el cual sera el fragmento el cual contendra todo el contenido que queremos mostrar al DOM*/
const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
];

const $ul3 = document.createElement('ul'); //creamos una etiqueta ul
//esta es la forma de crear un fragmento
const $frament = document.createDocumentFragment();
//recorremos el arreglo de los meses
meses.forEach(mes => { //por cada vuelta
    const $li = document.createElement('li'); //crea una etiqueta li
    $li.textContent = mes //agregale el mes
    $frament.appendChild($li); //y agrega la etiquea li al fragmento
});

document.write('<h3>Mese del Año</h3>');
//a la ul le agregamos como hijo el fragmento que contiene todos los meses
$ul3.appendChild($frament);
//y agregamos al body nuestra etiquea ul
document.body.appendChild($ul3);














