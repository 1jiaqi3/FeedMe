<template>
  <div id="app">
    <v-header></v-header>
    <div class="nav">
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
    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/header/header.vue';

  export default {
    components: {
      'v-header': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  // there is a postcss plugin in vue-loader, that can take care of our browser compatibility
  .nav
    // flex box
    display:flex
    width: 100%

    height: 40px
    // set line-height same as its container's height, making text vertically centered
    line-height: 40px
    .nav-item
      // make 3 items evenly divide
      flex: 1
      // horizontally text-align
      text-align: center

</style>
