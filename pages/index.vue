<template>
  <h1 class="color-green">首页</h1>
  <div>{{ $store.userInfo.name }}:{{ $store.userInfo.id }}</div>
  <p class="text-center">unocss icons</p>
  <div class="flex flex-wrap text-5xl flex-justify-between p3">
    <i class="i-ass-icon-good-job"></i>
    <i class="i-ass-icon-bad-job"></i>
    <i class="i-ass-icon-success"></i>
    <i class="i-ass-icon-xiaoxi"></i>
    <i class="i-ass-invalid-name"></i>
  </div>
  <p>vueuse</p>
  <div>x:{{ x }} y:{{ y }}</div>
</template>
<script setup>
const { x, y } = useMouse();
const $store = useStore();
// 持久化数据
if (!$store.userInfo.id) {
  console.log("set userinfo");
  $store.userInfo = { id: 9527, name: "piniaStore" };
}
</script>
<style lang="scss" scoped>
.color-green {
  font-weight: bold;
  text-align: center;
}
</style>
