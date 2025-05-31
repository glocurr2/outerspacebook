<template>
  <header>
    <div>
      <header id="app-header" class="app-header"><BookHeader /></header>
    </div>
  </header>
  <RouterView />
  <footer style="color: white">
    <div style="float: left">&copy; {{ copyright }}</div>
    <div @click="scrollToTop()" class="to-top">
      <fa icon="fa-solid fa-hand-pointer" />
      &nbsp; TO TOP
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from "vue";
import BookHeader from "./components/BookHeader.vue";
import { useBookStore } from "@/stores/books";
const copyright = ref(new Date().getFullYear() + " " + "outerspacebook.net");
const scrollToTop = () => {
  document.getElementById("app-header").scrollIntoView();
};
const storeBooks = useBookStore();
onMounted(() => {
  storeBooks.fetchData();
});
</script>

<style scoped></style>
