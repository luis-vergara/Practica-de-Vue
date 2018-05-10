const vm = new Vue({
    el:'main',
    data:{
        laborales:['Lunes','Martes','Miércoles','Jueves','Viernes'],
        tareas : [
            {nombre: 'Hacer la Compra',Prioridad:'baja'},
            {nombre: 'Aprender Vue y Firebase',Prioridad:'alta'},
            {nombre: 'Ir al gimnasio',Prioridad:'alta'},
        ],
        persona:{
            nombre: 'Luis',
            profesion: 'dev',
            ciudad: 'Bogota'
        }
    }
    
})