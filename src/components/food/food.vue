<template>
  <transition name="move">
    <div v-show="showFlag" class="food" ref="food">
      <div class="img-header">
        <img :src="food.image">
        <div class="back" @click="hide">
          <i class="icon-arrow_lift"></i>
        </div>
      </div>
      <div class="content">
        <h1 class="title">{{food.name}}</h1>
        <div class="detail">
          <span class="sale-stat">Monthly sold {{food.sellCount}}</span>
          <span class="likes">Liked rate {{food.rating}}</span>
        </div>
        <div class="price">
          <span class="now">${{food.price}}</span>
          <span class="old" v-show="food.oldPrice">${{food.oldPrice}}</span>
        </div>
      </div>
    </div>
  </transition>

</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      food: {
        type: Object
      }
    },
    data() {
      return {
        showFlag: false
      };
    },
    methods: {
      show() {
        this.showFlag = true;
      },
      hide() {
        this.showFlag = false;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .food
    position: fixed
    left: 0
    top: 0
    bottom: 48px
    z-index: 30
    width: 100%
    background: #fff
    transform: translate3d(0, 0, 0)
    &.move-enter-active, &.move-leave-active
      transition: all 0.2s linear
    &.move-enter, &.move-leave-active
      transform: translate3d(100%, 0, 0)
    .img-header
      position: relative
      width: 100%
      height: 0
      // This sets the padding-top to be the width of img-header
      padding-top: 100%
      img
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
      .back
        position: absolute
        top: 10px
        left: 0
        .icon-arrow_lift
          display: block
          padding: 10px
          font-size: 20px
          color: #fff
</style>
