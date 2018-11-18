<template>
  <div class="container-fluid wine-wrapper">
    <app-wine-filters></app-wine-filters>
    <app-wine-display></app-wine-display>
  </div>
</template>

<script>
import WineFilters from '@/components/wine/Filters'
import WineDisplay from '@/components/wine/WineDisplay'
export default {
  name: 'wine',
  components: {
    'app-wine-filters': WineFilters,
    'app-wine-display': WineDisplay
  }
}
</script>

<style lang="scss">
.wine-wrapper {
  background-color:AntiqueWhite;
  padding-bottom:25px;
  box-sizing:border-box;
  padding-left:0px;
  padding-right:0px;
}
</style>
