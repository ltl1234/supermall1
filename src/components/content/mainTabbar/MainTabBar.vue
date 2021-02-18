<template>
  <tab-bar>
      <!-- 在插槽中插入四个小的组件 -->
      <tab-bar-item path="/home" activeColor="blue">
      <!-- 别名在标签基本属性中的使用，要加~ -->
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" />
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" />
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart" activeColor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" />
        <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" />
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
// 取别名之后，对于import是如下面这一行这样使用的
// import TabBar from 'components/tabbar/TabBar'
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
