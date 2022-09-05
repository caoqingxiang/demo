<template>
  <div>
    <el-pagination
      background
      v-model:currentPage="currentPage1"
      v-model:page-size="pageSize1"
      :page-sizes="[2, 3, 5, 7]"
      :small="small"
      layout="total, sizes, prev, pager, next, jumper"
      :total="16"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
  <div>
    <el-button @click="change" type="danger" style="margin-left: 200px">
    </el-button>
    <dogSon :name="name"></dogSon>
  </div>
</template>

<script lang="ts">
import { toRefs, toRef, ref, reactive } from "vue";
import dogSon from "./dogSon.vue";
export default {
  name: "Home",
  props: {
    title: {
      type: String,
      default: "项目",
      require: false,
    },
  },
  components: {
    dogSon,
  },
  // interface prop = {
  //       type: String;
  //       default: string;
  //       require: boolean;
  //     };

  setup(props: any) {
    const obj = {
      count: 0,
      name: "法外狂徒张三",
    };
    const state = reactive(obj);
    function change() {
      // ++state.count;
      obj.count++;
      console.log(obj);
      console.log(state);
      console.log(props.title);
    }
    return {
      obj,
      change,
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped></style>
