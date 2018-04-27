Vue.prototype.$http = axios;

new Vue({
    el:'main',
    mounted(){
        this.cargarPersonas();
    },
    data:{
        personas:[]
    },
    methods:{
        cargarPersonas(){
            /*this.$http.get('https://randomuser.me/api/?results=500')
            .then((respuesta)=>{
                this.personas = respuesta.body.results;
            });*/

            axios.get('https://randomuser.me/api/?results=500')
            .then((respuesta)=>{
                console.log(respuesta);
                this.personas = respuesta.data.results;
            })
        }
    }
})