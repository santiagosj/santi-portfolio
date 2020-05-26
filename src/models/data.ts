import {Work} from './work'
import {Project} from './project'


export const PROJECTS:Project[] = [
    {
        id: 1,
        link:'https://github.com/santiagosj/Social-rick',
        demo:'https://social-rick-eb972.web.app/',
        techs:['Cloud functions - ReactJs - Redux - materialize.css'],
        description:"Main Concepts: manage the state of the app with Redux and implement firebase functions(Node.js) ",
    },
    {
        id: 2,
        link:'https://github.com/santiagosj/shopping-cart',
        demo:'',
        techs:['ReactJS','Redux','Node ☕',"Firebase"],
        description:"Main Concepts:The main gold was take a well known repo and modify it... without @#$!%&, and tackle Redux."
    },
    {
        id: 3,
        link:'https://github.com/santiagosj/PlayRoom',
        demo:'https://tetris-react-hooks.firebaseapp.com/',
        techs:['ReactJS 🎮'],
        description:"Main Concepts: Hooks in ReactJS, Styled components"
    },
    {
        id: 4,
        link:'https://github.com/santiagosj/trabajo-final-UTN-reactJS',
        demo:'https://shop-utn.web.app/#/login',
        techs:['ReactJS --> ContextAPI && BulmaCSS'],
        description:"Main Concepts:Use context API from React to el manejo de estados en la app y aplicar estilos con Bulma."
    },
]

export const WORKS:Work[] = [
    {id:1, link:'https://www.deptoarrayanes.com.ar'},
    {id:2, link:'https://leyria-zelechowski.firebaseapp.com'},
    {id:3, link:'https://ortopedia4catalogo.com.ar'},
    {id:4, link:'https://morrojiujitsu.com.ar/'},
]


