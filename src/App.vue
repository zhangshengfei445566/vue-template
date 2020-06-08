<template>
  <div id="app">
    <!--<router-link to="/tree">树</router-link>
    <router-link to="/form">表格</router-link>-->
<!--    <router-link to="/page" active-class="active" tag="button" replace>首页</router-link>-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
      name: 'App',
      data(){
          return {

          }
      },
      components: {

      },
      methods: {

      }
  }
</script>

<style lang="stylus">
  @import "assets/css/base.css"
  .active{
    color : rgba(11, 241, 11, 0.49)
  }


</style>

