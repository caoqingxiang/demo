<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="1">
            <i class="fa fa-cog" aria-hidden="true"></i>
            <router-link :to="{ name: 'Table' }">
              <span style="font-size: 20px; color: red; font-weight: bold"
                >表格</span
              >
            </router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="fa fa-cog" aria-hidden="true"></i>
            <router-link :to="{ name: 'Home' }">
              <span style="font-size: 20px; color: skyblue; font-weight: bold"
                >分页</span
              >
            </router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="fa fa-cog" aria-hidden="true"></i>
            <router-link to="/Father">
              <span
                style="
                  font-size: 20px;
                  color: mediumspringgreen;
                  font-weight: bold;
                "
                >命名视图</span
              >
            </router-link>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <el-row>
            <el-col :span="8"
              ><div class="grid-content ep-bg-purple">1</div>
            </el-col>
            <el-col :span="8"
              ><div class="grid-content ep-bg-purple">2</div>
            </el-col>
            <el-col :span="4"
              ><div class="grid-content ep-bg-purple">3</div>
            </el-col>
            <el-col :span="4"
              ><div class="grid-content ep-bg-purple">4</div>
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from "vue";
export default {
  name: "App",
  components: {},

  setup() {
    const state: { [key: string]: any } = reactive({});

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss">
.el-header {
  background-color: pink;
}
.el-main {
  background-color: whitesmoke;
}
</style>
