<template>
  <div>
    <el-button type="success" @click="router.back()">返回</el-button>
    <h3>params详情页</h3>
    <div>日期：{{ route.params?.date }}</div>
    <div>姓名：{{ route.params?.name }}</div>
    <div>地址：{{ route.params?.address }}</div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
</script>

<style lang="scss" scoped></style>
