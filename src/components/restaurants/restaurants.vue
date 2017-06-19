<template>
  <div class="restaurants">
    <div class="seller-content">
      <div class="overview">
        <h1 class="title">{{seller.name}}</h1>
        <div class="desc">
          <ratingstar :size="36" :score="seller.score"></ratingstar>
          <span class="text">{{seller.ratingCount}}</span>
          <span class="text">{{seller.sellCount}}</span>
        </div>
        <ul class="remark">
          <li class="block">
            <h2>起送价</h2>
            <div class="content">
              <span class="stress">${{seller.minPrice}}</span>
            </div>
          </li>
          <li class="block">
            <h2>Delivery Price</h2>
            <div class="content">
              <span class="stress">${{seller.deliveryPrice}}</span>
            </div>
          </li>
          <li class="block">
            <h2>Delivery Time</h2>
            <div class="content">
              <span class="stress">${{seller.deliveryTime}} min</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import ratingstar from '../../components/ratingstar/ratingstar';
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    components: {
      ratingstar
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
