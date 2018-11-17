<template>
  <nav class="container-fluid navigation">
    <div class="row justify-content-center">
      <div class="col-md-auto links-container">
        <router-link class="link" activeClass="active" to="Wine" tag="span" exact>Wine</router-link>
        <router-link class="link" activeClass="active" to="SpecialOrders" tag="span" exact>Special Orders</router-link>
        <router-link class="link" activeClass="active" to="OtherStuff" tag="span" exact>Other Stuffs</router-link>
        <router-link class="link" activeClass="active" to="The4Tag" tag="span" exact>The 4 Tag</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
</script>

<style lang="scss">
.navigation {
  height:60px;
  line-height:60px;
  background-color:white;
  box-shadow: 0px 2px 8px -2px Peru;
  color:black;
  .links-container {
    text-align:right;
    .link {
      margin-left:25px;
      font-size:28px;
      &.active {
        color:Peru;
      }
    }
  }
}
</style>
