<template>
  <div>
    <ul>
      <li><router-link to="/one">1.菜单露222222</router-link></li>
      <li><router-link to="/two">2.菜单二</router-link></li>
      <li><router-link to="/three">3.菜单三</router-link></li>
    </ul>
  </div>
</template>

<style>

</style>

<script>
export default {
  created () {
    console.log('main3')
  }
}
</script>
