const compartido = {
    usuario:{
        nombre:'Luis Vergara'
    }
}

new Vue({
    el:'#app1',
    data:compartido ,
})
new Vue({
    el:'#app2',
    data:compartido,
})