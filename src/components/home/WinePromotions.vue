<template>
  <div class="row">
    <wine-promotion
      class="wine-promotion col-xs-12 col-md-6 col-xl-3"
      v-for="wine in promotionList"
      :key="wine.id"
      :wine="wine">
    </wine-promotion>
  </div>
</template>

<script>
import WinePromotion from '@/components/home/WinePromotion'
export default {
  data () {
    return {}
  },
  computed: {
    promotionList () {
      return this.$store.getters.listPromotionWines
    }
  },
  components: {
    'wine-promotion': WinePromotion
  }
}
</script>

<style>
.wine-promotion {
  height:350px;
}

</style>
