//Traversing en le DOM quiere decir como recorremos el DOM, como recorremos sus elementos

const $card = document.querySelector('.cards'); // capturamos las tarjetas de la card

console.log($card);
console.log($card.children); //hacemos referencia a sus hijos que contiene
console.log($card.children[2]); //hacemos referencia aun hijo en especial
console.log($card.parentElement); //retorna el elemento padre
console.log($card.firstElementChild); //nos retorna el primer hijo del elemento
console.log($card.lastElementChild); //nos retorna el ultimo hijo del elemento

//Tambien podemos recorrerlo hacia a fuera, saber cual es su hermano anterior y posterior del elemento
console.log($card.previousElementSibling); //retorna el hermano anterior del elemento
console.log($card.nextElementSibling); //retorna el hermano posterior del elemento

//Busca el padre mas cercano del tipo de selector que nosotros le demos como parametro
//del elemento de cards su hijo 2 cual es la section ancestral mas cercana
console.log($card.children[2].closest("section"));

