<template>
  <div class="container-fluid filters-wrapper">
    <div class="row">
      <app-dropdown :items="this.grades" class="col-sm-2"></app-dropdown>
      <div class="input-cage col-sm-2 align-self-center">
        <label class="align-self-center col-sm-2" style="margin-right:10px" for="wine-name">Name</label>
        <input id="wine-name" class="col-sm-8 offset-sm-1 align-self-center" v-model="wineName"/>
      </div>
      <div class="input-cage col-sm-2 align-self-center">
        <label class="align-self-center col-sm-4" style="margin-right:10px" for="wine-name">PRICE:From</label>
        <input id="wine-name" class="col-sm-4 offset-sm-1 align-self-center" v-model="wineInitialPrice"/>
      </div>
      <div class="input-cage col-sm-2 align-self-center">
        <label class="align-self-center col-sm-1" style="margin-right:10px" for="wine-name">To</label>
        <input id="wine-name" class="col-sm-4 offset-sm-1 align-self-center" v-model="wineFinalPrice"/>
      </div>
    </div>
  </div>
</template>

<script>
import AppDropdown from '@/components/general/Dropdown'
export default {
  data () {
    return {
      wineName: '',
      wineInitialPrice: 0,
      wineFinalPrice: 0,
      grades: {
        title: '0 / 5',
        label: 'Select a Grade',
        toLoop: [
          { id: 0, value: 0 },
          { id: 1, value: 1 },
          { id: 2, value: 2 },
          { id: 3, value: 3 },
          { id: 4, value: 4 },
          { id: 5, value: 5 }
        ]
      }
    }
  },
  components: {
    'app-dropdown': AppDropdown
  }
}
</script>

<style lang="scss" scoped>
.filters-wrapper {
  background-color:gray;
}

input {
  height:30px;
}
</style>
