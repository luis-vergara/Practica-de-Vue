import Home from './components/Home.vue';
import Equipo from './components/Equipo.vue';
import Usuario from './components/Usuario.vue';
import UsuarioFotos from './components/UsuarioFotos.vue';
import UsuarioBio from './components/UsuarioBio.vue';
import Contacto from './components/Contacto.vue';
import NoEncontrado from './components/No-encontrado.vue';
import {store} from './store';

export const routes = [
    {path:'/',component:Home,name:'home'},
    {path:'/prueba',alias:'/otraprueba',redirect:{name:'home'}, component:Home},
    {path:'/equipo/:id',component:Equipo,children:[
        {path:'',components:{
            default:Usuario,
            bio:UsuarioBio,
            fotos:UsuarioFotos
        },Usuario,name:'equipo'},

    ]},
    {path:'/contacto',meta:{privado:true},component:Contacto,name:'contacto',props:{newsletter:true}},
    {path :'*',component:NoEncontrado}
];