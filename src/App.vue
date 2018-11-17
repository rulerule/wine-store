<template>
  <div id="app">
    <app-header></app-header>
    <app-navigation></app-navigation>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import './plugins/bootstrap-vue'
import Header from '@/components/general/Header'
import Navigation from '@/components/general/Navigation'
import Footer from '@/components/general/Footer'
export default {
  components: {
    'app-header': Header,
    'app-navigation': Navigation,
    'app-footer': Footer
  }
}
</script>

<style lang="scss">
html, body {
  width:100%;
  height:100%;
}

#app {
  width:100%;
  height:100%;
  position:relative;
  font-family: 'Lobster';
}
</style>
