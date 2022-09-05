<template>
  <div>
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column label="日期" width="180">
        <template #default="scope">
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="180">
        <template #default="scope">
          <el-popover trigger="hover" placement="top">
            <template #default>
              <div>姓名: {{ scope.row.name }}</div>
              <div>住址: {{ scope.row.address }}</div>
            </template>
            <template #reference>
              <el-tag>{{ scope.row.name }}</el-tag>
            </template>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template #default="scope">
          <el-button size="mini" type="info" @click="toDetail(scope.row)"
            >详情</el-button
          >
          <el-button size="mini" type="primary" @click="handleDelete(scope.row)"
            >细节</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";

export default {
  setup(props: any) {
    type User = {
      date: string;
      name: string;
      address: string;
    };
    const router = useRouter();
    const toDetail = (row: User) => {
      console.log(row);
      router.push({
        path: "/Detail",
        query: row,
      });
    };
    const handleDelete = (row: User) => {
      router.push({
        name: "reg",
        params: {
          date: row.date,
          name: row.name,
          address: row.address,
        },
      });
    };
    const tableData = [
      {
        date: "2016-05-02",
        name: "张三",
        address: "上海市普陀区金沙江路 1518 弄",
      },
      {
        date: "2016-05-04",
        name: "李四",
        address: "上海市普陀区金沙江路 1517 弄",
      },
      {
        date: "2016-05-01",
        name: "王五",
        address: "上海市普陀区金沙江路 1519 弄",
      },
      {
        date: "2016-05-03",
        name: "赵六",
        address: "上海市普陀区金沙江路 1516 弄",
      },
    ];
    return {
      tableData,
      toDetail,
      handleDelete,
    };
  },
};
</script>

<style lang="scss" scoped></style>
