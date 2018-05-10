//Global mixin
import Vue from 'vue';
Vue.mixin({
    created(){
        //console.info('Hola desde mixin global')
        this.saludar(this.$options.nombre)
    },
    methods:{
        saludar(nombre){
            alert(`Hola desde ${nombre}!`)
        }
    }
});
// l ocal Mixin
export const mixin = {
    created(){
        //console.log('Created desde mixins')
        
    },
    data () {
        return {
            aprender: [
                {nombre: 'Ionic 7'},
                {nombre: 'Node'},
                {nombre: 'MongoDB'},
                {nombre: 'Angular 3'},
                {nombre: 'Laravel'},
            ],
            nuevaTecnologia: null,
        }
    },
    methods: {
        agregarTecnologia() {
            this.aprender.unshift({
                nombre: this.nuevaTecnologia,
            });
            this.nuevaTecnologia = null;
        },
    }
}