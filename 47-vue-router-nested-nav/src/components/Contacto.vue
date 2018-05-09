<template>
  <section>
      <h2>Donde encontrarme</h2>
      <p>c/. Lo que sea, Bogota</p>
      <!--<h5>{{$route.params.newsletter}}</h5>-->
      <h5>{{newsletter}}</h5>
      <pre>{{numero}}</pre>
      <template v-if="newsletter">
        <form action="">
          <h3>Newsletter</h3>
          <label for="correo">Correo</label>
          <input type="email" placeholder="Email" id="correo">
        </form>
      </template>
  </section>
</template>
<script>
export default {
  props:['newsletter'],
  data(){
      return {
          numero:null,
      }
  },
  beforeRouteEnter:((to,from,next)=>{
      console.info('Antes de entrar');
      setTimeout(()=>{
          next((vm)=>{
            vm.numero=Math.floor(Math.random()*1000);
          })
      },2000);
  }),
}
</script>
