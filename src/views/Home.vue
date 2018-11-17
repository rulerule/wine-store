<template>
  <div class="container-fluid home-wrapper">
    <app-carrousel></app-carrousel>
    <app-wine-promotions></app-wine-promotions>
    <app-curiosities></app-curiosities>
    <app-prize-winners></app-prize-winners>
    <app-visit-us></app-visit-us>
    <app-image-display></app-image-display>
  </div>
</template>

<script>
import ImageDisplay from '@/components/home/ImageDisplay'
import Carrousel from '@/components/home/Carrousel'
import PrizeWinners from '@/components/home/PrizeWinners'
import VisitUs from '@/components/home/VisitUs'
import Curiosities from '@/components/home/Curiosities'
import WinePromotions from '@/components/home/WinePromotions'
export default {
  name: 'home',
  components: {
    'app-image-display': ImageDisplay,
    'app-carrousel': Carrousel,
    'app-prize-winners': PrizeWinners,
    'app-visit-us': VisitUs,
    'app-curiosities': Curiosities,
    'app-wine-promotions': WinePromotions
  }
}
</script>

<style lang="scss">

</style>
