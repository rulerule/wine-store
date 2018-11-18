<template>
  <div class="wine-promotion">
    <span>{{this.wine.name}}</span>
    <img :src="this.wine.image"/>
    <p class="new-price">New Price: {{this.wine.newPrice}}</p>
    <p class="old-price">Old Price: {{this.wine.oldPrice}}</p>
    <img class="promotion-tag" :src="this.wine.promotionTag"/>
  </div>
</template>

<script>
export default {
  props: ['wine']
}
</script>

<style lang="scss" scoped>
.wine-promotion {
  display:flex;
  flex-direction:column;
  text-align:center;
}
span {
  width:100%;
  text-align:center;
  margin-bottom:4px;
  color:black;
  font-size:18px;
}
img {
  width:60%;
  height:250px;
  align-self:center;
  border-radius:6px;
}
.old-price {
  font-size:18px;
  color:black;
  position:relative;
  text-decoration:line-through red;
}
.new-price {
  font-size:20px;
  color:black;
}
.promotion-tag {
  position:absolute;
  width:80px;
  height:80px;
  left:15%;
  top:40px;
}
</style>
