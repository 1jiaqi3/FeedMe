<template>
  <div class="comments">
    <div class="comments-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{seller.score}}</h1>
          <div class="title">Overall Rating</div>
          <div class="ranking">Better than {{seller.rankRate}}% restaurants nearby</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">Service</span>
            <ratingstar :size="24" :score="seller.serviceScore"></ratingstar>
            <span class="score">{{seller.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">Food</span>
            <ratingstar :size="24" :score="seller.foodScore" class="star"></ratingstar>
            <span class="score">{{seller.foodScore}}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">Delivery</span>
            <span class="delivery">{{seller.deliveryTime}}</span>
          </div>
        </div>
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
  .comments
    position: absolute
    top: 174px
    bottom: 0
    left: 0
    width: 100%
    overflow: hidden
    .overview
      display: flex
      padding: 18px 0
      .overview-left
        flex: 0 0 137px
        padding: 6px 0
        width: 137px
        border-right: 1px solid rgba(7, 17, 27, 0.1)
        text-align: center
        .score
          margin-bottom: 6px
          line-height: 28px
          font-size: 24px
          color: rgb(255, 153, 0)
        .title
          margin-bottom: 8px
          line-height: 12px
          font-size: 12px
          font-weight: 200
          color: rgb(7, 17, 27)
        .ranking
          line-height: 10px
          font-size: 10px
          color: rgb(147, 153, 159)
      .overview-right
        flex: 1
        padding: 6px 0 6px 24px
        .score-wrapper
          margin-bottom: 8px
          font-size: 0
          .title
            display: inline-block
            line-height: 18px
            vertical-align: top
            font-size: 12px
            color: rgb(7, 17, 27)
          .star
            display: inline-block
            margin: 0 12px
            vertical-align: top
          .score
            display: inline-block
            line-height: 18px
            vertical-align: top
            font-size: 12px
            color: rgb(255, 153, 0)
        .delivery-wrapper
          font-size: 0
          .title
            line-height: 18px
            font-size: 12px
            color: rgb(7, 17, 27)
          .delivery
            margin-left: 12px
            font-size: 12px
            color: rgb(147, 153, 159)
</style>
