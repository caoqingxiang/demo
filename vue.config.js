const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 关闭语法检查

  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("./src"))
      // .set("@components", resolve("./src/components")); 这个还要在 tsconfig.js 配置
  },
});

const path = require("path");

function resolve(dir) {
  /**
   * __dirname：当前文件夹所在的绝对路径
   */
  return path.join(__dirname, dir);
}
