<template>
<div>
  <Navigation/>
   <router-view v-slot="{Component}">
    <transition name="fade" mode="out-in">
       <component :is="Component"/>
    </transition>
   </router-view>
</div>
</template>
<script>
import Navigation from "./components/Navigation.vue";
export default {
  name:"App",
  components: {
    Navigation,
  },
  created() {
    this.$store.commit("updateCartFromLocalStorage")
  }
}
</script>
<style>
.fade-enter-from,
.fade-leave-to {
  opacity:0;
}
.fade-enter-active,
.fade-leave-active {
  transition:opacity 0.5s ease-out;
}
* {
  margin:0;
  padding:0;
  box-sizing: border-box;
}
body {
  height:100vh;
  width:100%;
  position:relative;
  font-family: sans-serif;
}
</style>
