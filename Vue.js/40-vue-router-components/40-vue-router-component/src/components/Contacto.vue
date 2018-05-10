<template>
  <section>
      <h2>Contacto</h2>
      <button @click="volverHome()">Volver a Home</button>
  </section>
</template>

<script>
export default {
    created(){
        setTimeout(()=>this.$router.push('/'), 2000);
    },
  methods:{
      volverHome(){
          this.$router.push('/');
      }
  }
}
</script>
