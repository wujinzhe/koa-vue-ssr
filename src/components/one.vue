<template>
  <div class="">
    <router-link to="/">返回主页</router-link>
    <p>我是菜单一 啦啦啦啦啦~</p>
    <i-button type="primary">Primary</i-button>
  </div>
</template>

<script>
  import Button from 'iview/src/components/button'
  export default {
    components: {
      'i-button': Button
    }
  }
</script>

<style>

</style>
