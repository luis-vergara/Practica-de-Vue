Vue.component('mis-tareas',{
    props:['listado'],
    template:'#mis-tareas-template'
});

new Vue({
    el:'main',
    data:{
        tareas:[
            {titulo:'Salir a correr'},
            {titulo:'Recoger la casa'},
            {titulo:'Aprender Vue.js'},
            {titulo:'Mensajeros'},
            {titulo:'Leer cada dia'},
        ]
    }
});