const $queEsDOM = document.getElementById('que-es');

let text = `
    <p>
        El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
        API para documentos HTML y XML.
    </p>
    <p>
        Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
        <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>`;

//innerText sirve para agregar contenido textual a un elemento
//innerText fue creada para internet explore. No es un estandar
//Nos respeta los saltos de linea. No reconocer las etiquetas HTML
$queEsDOM.innerText = text;
//textContent sirve para agregar contenido textual a un elemento, forma parte del estandar
//No respeta los saltos de linea. No reconocer las etiqueas HTML
//Cuando necesitemos insertar solo texto usamos esta propiedad
$queEsDOM.textContent = text
// Sirve para agregar contenido textual y reconocer las etiquetas html
//Cuando necesitemos insertar codigo html usamos esta propiedad
$queEsDOM.innerHTML = text;
//outerHTML remplaza la etiqueta donde estamso agregando el texto por los tres parrafos que creamos
//Esto es para que en el html tengamos una mejor escritura del html
$queEsDOM.outerHTML = text;