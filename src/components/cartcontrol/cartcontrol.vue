<template>
  <div class="cartcontrol">
    <div class="cart-minus" v-show="food.count > 0">
      <span class="icon-remove_circle_outline"></span>
    </div>
    <div class="cart-count" v-show="food.count > 0">{{food.count}}</div>
    <div class="cart-plus icon-add_circle" @click="addCart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      food: {
        type: Object
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cart-control
    font-size: 0
    .cart-minus, cart-plus
      display: inline-block
      // increasing the touching area, for better user experience, without changing style
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: aqua
    .cart-count
      display: inline-block
</style>
