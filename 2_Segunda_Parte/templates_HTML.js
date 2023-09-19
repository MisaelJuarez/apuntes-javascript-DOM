const $Contenedorcards = document.querySelector('.cards');
//capturamos la etiqueta template y le agregamos content para tener acceso a su contenido
const $template = document.getElementById('template-card').content;
const $fragment = document.createDocumentFragment(); //creamos un fragmento

const cardContent = [
    {
        title: 'Tecnologia (usando fragmento y template)',
        img: 'http://placeimg.com/200/200/tech'
    },
    {
        title: 'Animales (usando fragmento y template)',
        img: 'http://placeimg.com/200/200/animals'
    },
    {
        title: 'Arquitectura (usando fragmento y template)',
        img: 'http://placeimg.com/200/200/arch'
    },
    {
        title: 'Personas (usando fragmento y template)',
        img: 'http://placeimg.com/200/200/peple'
    },
    {
        title: 'Naturaleza (usando fragmento y template)',
        img: 'http://placeimg.com/200/200/nature'
    }
];

cardContent.forEach(el => {
    //dentro del template encuentra la etiqueta img y agregale los siguientes atributos
    $template.querySelector('img').setAttribute('src',el.img);
    $template.querySelector('img').setAttribute('alt',el.title);
    //dentro del template encuentra el figcaption y agregale el titulo
    $template.querySelector('figcaption').textContent = el.title;

    //el template es unico, cuando lo ocupe para la primer tarjeta ya no estario disponible para las demas
    //para solucionarlo clonamos la template
    //con importNode podemos clonar todo un nodo, y pasamos true para clonar todo su contenido tambien
    let $clone = document.importNode($template,true); 
    $fragment.appendChild($clone); //agregale el clone al fragmento
});
//agregamos el fragmento a la etiquet card 
$Contenedorcards.appendChild($fragment);

