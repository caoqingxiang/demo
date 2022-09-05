<template>
  <div>
    <el-tree
      :data="data"
      :props="defaultProps"
      indent="10"
      @node-click="handleNodeClick"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from "vue";
interface Tree {
  label: string;
  children?: Tree[];
}
export default {
  setup(props: any) {
    const currentPage1 = ref(2);
    const pageSize1 = ref(2);
    const cellClassName = ({
      row,
      rowIndex,
    }: {
      row: { [key: string]: any };
      rowIndex: number;
    }) => {
      console.log("111", rowIndex);
      if (rowIndex == 2) {
        console.log(111);
        return "className";
      }
    };
    const handleSizeChange = (val: number) => {
      console.log(`每页 ${val} 条`);
    };
    const handleCurrentChange = (val: number) => {
      console.log(`当前页: ${val}`);
    };

    const handleNodeClick = (data: Tree) => {
      console.log(data);
    };
    const data: Tree[] = [
      {
        label: "Level one 1",
        children: [
          {
            label: "Level two 1-1",
            children: [
              {
                label: "Level three 1-1-1",
              },
            ],
          },
        ],
      },
      {
        label: "Level one 2",
        children: [
          {
            label: "Level two 2-1",
            children: [
              {
                label: "Level three 2-1-1",
              },
            ],
          },
          {
            label: "Level two 2-2",
            children: [
              {
                label: "Level three 2-2-1",
              },
            ],
          },
        ],
      },
      {
        label: "Level one 3",
        children: [
          {
            label: "Level two 3-1",
            children: [
              {
                label: "Level three 3-1-1",
              },
            ],
          },
          {
            label: "Level two 3-2",
            children: [
              {
                label: "Level three 3-2-1",
              },
            ],
          },
        ],
      },
    ];
    const defaultProps = {
      children: "children",
      label: "label",
    };
    return {
      data,
      handleNodeClick,
      defaultProps,
      pageSize1,
      currentPage1,
      handleSizeChange,
      handleCurrentChange,
      cellClassName,
    };
  },
};
</script>

<style lang="scss" scoped>
.className {
  background-color: palevioletred;
}
</style>
