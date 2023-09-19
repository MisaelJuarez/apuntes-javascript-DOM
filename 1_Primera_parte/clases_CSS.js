console.error('CLASES DE CSS');

const $card = document.querySelector('.card');

console.log($card);
console.log($card.className); // Devuelve el nombre de la clase que contiene
// Nos devuelve true si tiene la calse que indicamos y false si no la tiene
console.log($card.classList.contains("rotate-45")); 

// Para agregar un clase a un elemento sea hace lo siguiente
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45")); 
console.log($card.classList); // nos devuelve un DomToken de las clases que contiene el elemento

// Tambien podemos quitar una clase de la siguiente forma
$card.classList.remove("rotate-45");

// El metodo toggle es como una palanca, si tiene la clase se la agrega si no se la quita
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
// Si volvemos a ejecutar un toggle se lo quitara
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));

// Para remplazar una clase por otra usamos replace, primer parametro la clase que contiene y el segundo la nueva clase
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45","rotate-135");

// Si queremos agregar mas de una clase lo podemos hacer separado por comas
$card.classList.add("opacity-80","sepia");
// Tambien puedes romover mas de una clase a la vez
$card.classList.remove("opacity-80","sepia");