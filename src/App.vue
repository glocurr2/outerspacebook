<template>
  <header>
    <div>
      <header id="app-header" class="app-header"><BookHeader /></header>
    </div>
  </header>

  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>

  <footer style="color: white">
    <div style="float: left">&copy; {{ copyright }}</div>
    <div @click="scrollToTop()" class="to-top">
      <fa icon="fa-solid fa-hand-pointer" />
      &nbsp; TO TOP
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';
import BookHeader from './components/BookHeader.vue';

const copyright = ref(new Date().getFullYear() + ' ' + 'outerspacebook.net');
const scrollToTop = () => {
  document.getElementById('app-header').scrollIntoView();
};
</script>

<style scoped>
.fade-enter-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
}
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-leave-to {
  opacity: 0;
}
</style>
