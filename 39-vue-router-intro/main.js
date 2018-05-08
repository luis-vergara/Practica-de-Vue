const home = Vue.component('Home',{
    template:'<h1>Portada</h1>'
});
const contacto = Vue.component('Contacto',{
    template:'<h1>Contacto</h1>'
}); 

//Rutas
const routes = [
    {path:'/',component: home},
    {path:'/contacto',component: contacto},
];
//instaciar el componente enrutador
const router = new VueRouter({routes});

new Vue({
    router,
    el:'main'
})