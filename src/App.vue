<template>
  <div id="app" class="h-auto relative max-w-[1920px] mx-auto transition-all duration-1000">
    <header-vue />
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <footer-vue />
  </div>
</template>

<script>
import FooterVue from "./components/FooterVue.vue";
import HeaderVue from "./components/HeaderVue.vue";
import AOS from "aos";

export default {
  components: { FooterVue, HeaderVue },
  name: "App",
  data() {
    return {

    };
  },
  mounted() {
    AOS.init();
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
