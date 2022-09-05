<template>
  <div>
    <p>name: {{ nameRef }}</p>
    <el-button type="primary" @click="change">变化</el-button>
  </div>
</template>

<script lang="ts">
import { ref, toRefs, watch } from "vue";
export default {
  name: "dogSon",
  props: {
    name: {
      type: String,
      default: "",
    },
  },
  setup(props: any) {
    // const { name } = props.name // 报错： will cause the value to lose reactivity
    const { name } = toRefs(props);
    const nameRef = ref("");
    watch(
      name,
      (name) => {
        nameRef.value = name + "new";
      },
      {
        immediate: true,
      }
    );
    const change = () => {
      nameRef.value += "变量";
    };

    return {
      change,
      nameRef,
    };
  },
};
</script>

<style lang="scss" scoped></style>
