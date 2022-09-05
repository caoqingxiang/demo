<template>
  <div class="login">
    <el-card class="box-card">
      <el-form
        ref="formRef"
        :model="formInline"
        :rules="rulesForm"
        class="demo-form-inline"
      >
        <el-form-item label="账号：" prop="user">
          <el-input v-model="formInline.user" placeholder="请输入账号" />
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input
            type="password"
            v-model="formInline.password"
            placeholder="请输入密码"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts">
import { reactive, ref, toRefs } from "vue";
import { useRouter } from "vue-router";
import type { FormInstance } from "element-plus";
import { ElMessage } from "element-plus";

export default {
  setup(props: any) {
    const formRef = ref<FormInstance>();
    const state = reactive({
      formInline: {
        user: "",
        password: "",
      } as { [key: string]: any },

      rulesForm: {
        user: { required: true, message: "请输入登录账号", trigger: "blur" },
        password: { required: true, message: "请输入密码", trigger: "blur" },
      },
    });
    const router = useRouter();
    const onSubmit = () => {
      formRef.value?.validate((validate) => {
        if (validate) {
          router.push("/index");
          localStorage.setItem('token','1') // 登录凭证
        } else {
          ElMessage.error("请输入完整")
        }
      });
    };
    return {
      ...toRefs(state),
      formRef,
      onSubmit,
    };
  },
};
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

// .text {
//   font-size: 14px;
// }

// .item {
//   margin-bottom: 18px;
// }

// .box-card {
//   width: 480px;
// }
</style>
