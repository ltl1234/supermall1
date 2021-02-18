<template>
  <swiper>
        <swiper-item v-for="item in banners" v-bind:key="item.acm">
          <!-- 每张轮播图都是可以点击的，因此先在最外层给一个a标签 -->
          <a :href="item.link">
            <img :src="item.image" alt=""/>
          </a>
        </swiper-item>
      </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
  export default {
    name: 'HomeSwiper',
    props: {
      banners: {
        type: Array,
        // 默认值要是一个函数
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
</style>
