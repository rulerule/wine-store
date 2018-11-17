<template>
  <div class="row carrousel-wrapper">
    <b-carousel id="carousel1"
                controls
                indicators
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >
      <b-carousel-slide>
        <img slot="img" src="../../assets/image-1.jpg"/>
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" src="../../assets/image-1.jpg"/>
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" src="../../assets/image-1.jpg"/>
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" src="../../assets/image-1.jpg"/>
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" src="../../assets/image-1.jpg"/>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style lang="scss">
.carrousel-wrapper {
  height:600px;
  #carousel1 {
    margin:0 auto;
    width:100%;
    height:600px;
    overflow:hidden;
  }
}
</style>
