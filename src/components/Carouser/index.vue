<template>
  <!--banner轮播-->
  <div class="swiper-container" ref="myswiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(banner, index) in bannerliset"
        :key="banner.id"
      >
        <img :src="banner.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Carouser",
  props: ["bannerliset"],
  //这里注意，需要通过watch加nextick的方式才能实现，因为数据是发请求回来的，否则不生效
  watch: {
    bannerliset: {
      immediate: true, //这里加它没什么用，就是为了让和floor的代码一致
      handler(newval, oldval) {
        this.$nextTick(() => {
          new Swiper(this.$refs.myswiper, {
            // direction: "vertical", // 垂直切换选项
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },

            // 如果需要滚动条
            // scrollbar: {
            //   el: ".swiper-scrollbar",
            // },
          });
        });
      },
    },
  },
};
</script>

<style>
</style>