<template>
  <div class="row">
    <div class="info-box col-xs-12 col-md-6 col-xl-3">
      <img src="@/assets/image-1.jpg"/>
    </div>
    <div class="info-box col-xs-12 col-md-6 col-xl-3">
      <img src="@/assets/image-2.jpg"/>
    </div>
    <div class="info-box col-xs-12 col-md-6 col-xl-3">
      <img src="@/assets/image-5.jpg"/>
    </div>
    <div class="info-box col-xs-12 col-md-6 col-xl-3">
      <img src="@/assets/image-6.jpg"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info-box {
  height:300px;
  overflow:hidden;
  box-sizing:border-box;
  padding-right:15px;
  padding-left:15px;
  &:first-of-type {
    padding-left:0px;
  }
  &:last-of-type {
    padding-right:0px;
  }
  img {
    width:100%;
    height:100%;
    border-radius:6px;
  }
}
</style>
