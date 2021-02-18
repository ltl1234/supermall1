<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <!-- <div :class="{ active: isActive }"> -->
      <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      // isActive: true,
    };
  },
  computed: {
    // /home -> item(home)  = true
    // /home -> item(category)  = false
    // /home -> item(shopcart)  = false
    // /home -> item(profile)  = false
    isActive() {
      // 判断当前组件存放的路由path与正处于活跃的路由path是否相同，相同则找到不等于-1，为true，否则为false
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      // 监听单击事件，进行路由跳转
      this.$router.replace(this.path)
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  /* tab-bar均等分布 */
  flex: 1;
  /* 居中分布 */
  text-align: center;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;

  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 3px;
}

/* .active {
  color: red;
} */
</style>
