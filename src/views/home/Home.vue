<template>
  <div id="home">
    <nav-bar class="home-nav"> <div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommendView from './childComps/HomeRecommendView'
import { getHomeMultidata } from "network/home";

// // // 当公共组件文件夹swiper中没有Index.js文件时，需要导入两个
// // import Swiper from 'components/common/swiper/Swiper'
// // import SwiperItem from 'components/common/swiper/SwiperItem'
// import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView
  },
  data() {
    return {
      // 轮播图的图片
      banners: [],
      recommends: [],
    };
  },
  created() {
    // 1.请求多个数据
    // 拿到result之后要将result中的数据给保存起来
    getHomeMultidata().then((res) => {
      // console.log(res)
      // 保存首页轮播图的图片
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};

// // 函数调用 -> 压入函数栈(保存函数调用过程中所有变量)
// // 函数调用结束  -> 弹出函数栈(释放函数中所有变量)
//  function test() {
//     const names = ['codewhy', 'aaa', 'bbb']
//   }

//   test()
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
