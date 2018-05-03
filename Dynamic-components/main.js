Vue.component('lista-tareas',{
    template:
    `<div>
        <h1><slot></slot></h1>
        <ul>
            <tarea v-for="tarea in tareas" :tarea="tarea"></tarea>
        </ul>
        <hr>
    </div>`,
    data(){
        return {
            tareas:[
                'Finalizar sección Componentes',
                'Iniciar workflow con vue CLI y webpack',
                'Terminar de estudiar la documentacion de Vuex', 
            ]
        }
    }
});

Vue.component('tarea',{
    props:['tarea'],
    template:`<li>{{tarea}}</li>`
});

Vue.component('contacto',{
    template:`<div><a href="mailto:luiseduardovergarasierra@gmail.com">luiseduardovergarasierra@gmail.com</a></div>`,
});
Vue.component('bio',{
    template:`<div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p></div>`
});

new Vue({
    el:'main',
    data:{
        seleccionado:'lista-tareas'
    }
});