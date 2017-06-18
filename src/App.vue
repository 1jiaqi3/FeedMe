<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="nav border-1px">
      <div class="nav-item">
        <router-link to="/goods">Cuisine</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/comments">Comments</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/rests">Restaurants</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/header/header.vue';

  const ERR_OK = 0;

  export default {
    data() {
      return {
        seller: {}
      };
    },
    created() {
      this.$http.get('/v1/seller').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.seller = response.data;
        }
      });
    },
    components: {
      'v-header': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"
  // there is a postcss plugin in vue-loader, that can take care of our browser compatibility
  .nav
    // flex box
    display:flex
    width: 100%

    height: 40px
    // set line-height same as its container's height, making text vertically centered
    line-height: 40px
    border-1px(rgba(7, 17, 27, 0.1))
    .nav-item
      // make 3 items evenly divide
      flex: 1
      // horizontally text-align
      text-align: center
      // a, not route-link, because route-link will be a in the browser. But do we have better ways?????????
      & > a
        // because we want the whole area is able to be clicked, not only the text
        // if it is inline, only text reacts to click
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
        &.active
          color: rgb(240, 20, 20)

</style>
