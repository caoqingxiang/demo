<template>
  <div>父路由</div>
  <router-link to="/Father/Child1">亲儿子</router-link>
  <router-link style="margin-left: 20px" to="/Father/Child2">干儿子</router-link>
  <div>
    <router-view></router-view>
    <router-view name="son1"></router-view>
    <router-view name="son2"></router-view>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped></style>
