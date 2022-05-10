<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="!this.$route.meta.isHidden"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",
  //非路由组件是注册在要使用的组件当中
  components: {
    Header,
    Footer,
  },
  mounted() {
    //在这里发请求获取三级分类的数据那么就之后发一次
    this.$store.dispatch("getCatgorylist");
  },
};
</script>

<style>
</style>
