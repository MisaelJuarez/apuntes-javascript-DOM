const $link = document.getElementById('linkEstilosVariables');
// Nos da las propiedades css en un mapa
console.log($link.style);
// Tambien podemos acceder con getAttribute pero solo nos dara la propiedad que contenga
console.log($link.getAttribute('style'));
// Para mostrar una propiedad de css despues del punto ponemos el estilo
console.log($link.style.color);
// Tambien nos da una lista de las propiedades de un elemento de la siguiente manera
console.log(window.getComputedStyle($link));
// Y para acceder a una propiedad en especifico
console.log(getComputedStyle($link).getPropertyValue('color'));

// ESTABLECER VALORES
// para asignarle una propiedad css desde js, usamos setProperty()
// su primer parametro va el nombre de la propiedad y el segundo parametro su valor
$link.style.setProperty('text-decoration','none');
$link.style.setProperty('display','block');

// Tambien podemos darle estilos con la notacion del punto
$link.style.width = '50%';
$link.style.textAlign = 'center';
$link.style.marginLeft = 'auto';
$link.style.marginRight = 'auto';
$link.style.padding = '1rem';
$link.style.borderRadius = '0.5rem';

// VARIABLES CSS - CUSTOM PROPERTIES CSS
const $html = document.documentElement; // representa la etiqueta html
const $body = document.body; 
// accedemos a las variables que creamos en css con getComputedStyle() y en getPropertyValue() ponemos el nombre de la variable
let varDarkColor = getComputedStyle($html).getPropertyValue('--dark-color');
let varYellowColor = getComputedStyle($html).getPropertyValue('--yellow-color');
console.log(varDarkColor, varYellowColor);
// body representa el elemento al cual le queremos dar el valor de nuestros variables
$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

// CAMBIAR LOS VALORES DE LAS VARIABLES CSS
// accedemos al html para tener acceso a las variables y con setProperty cambiamos el valor de la variable
$html.style.setProperty('--dark-color','#000');
// Actualizamos la variable para que obtenga el nuevo color
varDarkColor = getComputedStyle($html).getPropertyValue('--dark-color');
// asignamos el nuevo color al body
$body.style.setProperty('background-color',varDarkColor);
