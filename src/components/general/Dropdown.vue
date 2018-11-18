<template>
  <div>
    <label for="grade-dropdown">{{items.label}}</label>
    <b-dropdown id="grade-dropdown" class="m-md-4" :text="title">
      <b-dropdown-item @click="updateSelected(item)" v-for="item in items.toLoop" :key="item.id">{{item.value}}</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  props: ['items'],
  data () {
    return {
      title: this.items.title.toString()
    }
  },
  methods: {
    updateSelected (item) {
      this.title = item.value.toString()
    }
  }
}
</script>

<style lang="scss"><
  #grade-dropdown {
    min-width:250px;
    .dropdown-toggle {
      min-width:250px;
    }
  }
/style>
