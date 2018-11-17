<template>
  <nav class="container-fluid header">
    <div class="row justify-content-between">
      <router-link class="col-xs-2 logo" to="/" tag="span">Logotipo</router-link>
      <div class="col-xs-auto entrys-container">
        <router-link class="header-entry" to="help" tag="span" exact>HELP</router-link>
        <router-link class="header-entry" to="account" tag="span" exact>ACCOUNT</router-link>
        <router-link class="header-entry" to="cart" tag="span" exact>CART</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
</script>

<style lang="scss">
.header {
  height:60px;
  line-height:60px;
  background-color:Peru;
  color:white;
  .logo {
    box-sizing:border-box;
    padding-left:20px;
  }
  .entrys-container {
    text-align:right;
    box-sizing:border-box;
    padding-right:60px;
    .header-entry {
      margin-left:15px;
    }
  }
}

</style>
