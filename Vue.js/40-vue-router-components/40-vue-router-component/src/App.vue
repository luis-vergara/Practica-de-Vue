<template>
  <section>
    <h1>Rutas con vue Router</h1>
    <router-link to="/" active-class="activo" tag="li" exact><a>Home</a></router-link>
    <router-link to="/contacto" tag="li" active-class="activo"><a>Contacto</a></router-link>
    <router-link to="/usuario/77" tag="li" active-class="activo"><a>Usuario</a></router-link>
    <router-link to="/usuario/99" tag="li" active-class="activo"><a>Usuario</a></router-link>
    <hr>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: 'app',
  
}
</script>

<style>
  .activo a{
    color:red;
  }
</style>
