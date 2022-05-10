<template>
  <div>
    <Typenav> </Typenav>
    <Container></Container>
    <Recommend> </Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor
      v-for="(floor, index) in floorlist"
      :key="floor.id"
      :floor="floor"
    ></Floor>
    <Brand></Brand>
  </div>
</template>;

<script>
// import Typenav from "@/components/Typenav";
import Container from "./Container";
import Recommend from "./Recommend";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor";
import Brand from "./Brand";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    // Typenav,
    Container,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  //因为floor的数据是两个组件都在用的，并且是根据数据动态展示，所以要在共同的父组件发请求，并且通过props父子传值过去
  mounted() {
    this.$store.dispatch("getFloorList");
  },
  computed: {
    ...mapState({ floorlist: (state) => state.home.floorlist }),
  },
};
</script>

<style>
</style>