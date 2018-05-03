Vue.component('lista-tareas',{
    props:['tareas'],
    template:
            `<div>
                <h1><slot></slot></h1>
                <ul>
                    <li>
                        <tarea v-for="tarea in tareas" :tarea="tarea"></tarea>
                    </li>
                </ul>
            </div>`
});
Vue.component('tarea',{
    props:['tarea'] ,
    template:`<li>{{tarea}}</li>`
});


new Vue({
    el:'main',
    data:{
        tareas:[
            'Finalizar sección Componentes',
            'Iniciar workflow con vue CLI y webpack',
            'Terminar de estudiar la documentacion de Vuex',   
        ]
    }
})