new Vue({
    el:'main',
    data:{
        tareas:[
            {titulo:'Hacer la Compra',completado:false},
            {titulo:'Aprender Vue.js',completado:false},
            {titulo:'Aprender Firebase',completado:false},
            {titulo:'Dominar ES6',completado:false},
            {titulo:'Salir',completado:false},
        ]
    },
    methods:{
        completarTarea(tarea){
            tarea.completado = !tarea.completado;
        }
    },
    computed:{
        tareasCompletadas(){
            return this.tareas.filter((tarea)=>tarea.completado);
        }
    }
})