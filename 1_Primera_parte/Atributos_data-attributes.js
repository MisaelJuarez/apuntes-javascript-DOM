// Data-attributes -------------------------------------------------------------------
// Seleccionamos la etiqueta y con getAttribute() colocamos dentro el nombre del atributo que queramos ver su valor
console.log(document.querySelector('.atributo-h2').getAttribute('data-description'));
// Tambien se puede seleccionar el atributo con la notacion del punto.
// varea un poco ya que en algunos casos no nos da el valor del atributo.
console.log(document.getElementById('enlace-prueba').href);

//AGREGAR A UN ELEMENTO UN ATRIBUTO -----------------------------------------------------
const $linkDOM = document.querySelector('#enlace-prueba');
// el elemento que le agregaremos un atributo le colocamos setAttribute() 
// primer parametro va el nombre del atributo
// segundo parametro el valor del atributo
$linkDOM.setAttribute('target','_blank');
// este atributo dice que no hay una dependencia de la ventana que estamos abriendo y la ventana origen 
// son buenas practicas y sirve para evitar hakeos cuando usamos el target="_blank"
$linkDOM.setAttribute('rel','noopener');
$linkDOM.setAttribute('data-prueba','Atributo creado desde js');

// VERIFICAR SI UN ELEMENTO TIENE UN ATRIBUTO O NO
// con hasAttribute ponemos dentro el atributo y nos dara true si tiene el atributo y false si no lo tiene
console.log($linkDOM.hasAttribute('rel'));
console.log($linkDOM.hasAttribute('class'));

// ELIMINAR UN ATRIBUTO DE UN ELEMENTO ---------------------------------------------------
// con removeAttribute podemos eliminar un atributo colo colocando en los parentesis el nombre del atributo a eliminar
$linkDOM.removeAttribute('rel');


// DATA ATTRIBUTE
// seleccionar un data-attribute con la notacion del punto
console.log($linkDOM.dataset); // Tenemos en un mapa todos los data-attribute del elemento
// para seleccionar su valor solo con la notacion del punto ponemos el nombre sin el data
console.log($linkDOM.dataset.prueba);

// CAMBIAR EL VALOR DE UN DATA-ATTRIBUTE CON LA NOTACION DEL PUNTO
$linkDOM.dataset.prueba = 'Cambiando su valor desde JS';
console.log($linkDOM.dataset.prueba);

console.warn('------------------------------------------------------------');