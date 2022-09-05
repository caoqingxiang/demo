<template>
  <div>
    <el-button type="success" @click="router.back()">返回</el-button>
    <h3>query详情页</h3>
  </div>
  <div>日期：{{ route.query.date }}</div>
  <div>姓名：{{ route.query.name }}</div>
  <div>地址：{{ route.query.address }}</div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
</script>

<style lang="scss" scoped></style>
