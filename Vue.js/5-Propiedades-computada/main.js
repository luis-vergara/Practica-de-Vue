const vm=new Vue({
    el:'main',
    data:{
        mensajes:'Hola Mundo :) !',
        nuevaTarea:null,
        tareas:[
            {
                titulo:'Aprender Vue.js',
                prioridad:true,
                antiguedad:23
            },
            {
                titulo:'Aprender ES6',
                prioridad:false,
                antiguedad:135
            },
            {
                titulo:'Publicar algo todo los días',
                prioridad:false,
                antiguedad:300
            }
        ]
    },
    methods:{
        agregarTarea(){
            this.tareas.unshift(this.nuevaTarea);
            this.nuevaTarea=null;
        }
    },
    computed:{
        mensajesAlReves(){
            return this.mensajes.split('').reverse().join('');
        },
        tareasConPrioridad(){
            return this.tareas.filter((tarea)=>
                tarea.prioridad
            )
        },
        tareasPorAntiguedad(){
            return this.tareas.sort((a, b)=>
                b.antiguedad - a.antiguedad
            )
        }
    }
});
