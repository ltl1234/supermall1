<template>
  <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
  #tab-bar {
  display: flex;
  height: 49px;
  background-color: #f6f6f6;

  /* 使tabbar元素在页面底部 */
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  /* 底部tab-bar到上面的阴影 */
  box-shadow: 0 -3px 1px rbga(100,100,100,.8);
}


</style>
