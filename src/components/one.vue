<template>
  <div class="">
    <router-link to="/">返回主页</router-link>
    <p>我是菜单一 啦啦啦啦啦~</p>
    <i-button type="primary">Primary</i-button>
    <a href="#">啦啦啦啦</a>
    <LL></LL>
  </div>
</template>

<script>
  import label from './label.vue'
  import { Button } from 'iview'
  import a from './a.js'
  export default {
    data () {
      return {
        a
      }
    },
    components: {
      'LL': label,
      'i-button': Button
    }
  }
</script>

<style>
  a { 
    text-decoration: none;
  }
</style>
