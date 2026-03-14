<template>
  <section class="content-style">
    <div class="display">
      <BookCard
        :bookList="storeBooks.bookdata"
        @show-detail="showDetail"
        :site-url="SITE_URL"
      />
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useBookStore } from '@/stores/books';
import BookCard from '@/components/BookCard.vue';

const SITE_URL = import.meta.env.VITE_SITE_URL + '/images/';
const storeBooks = useBookStore();
const route = useRoute();
const router = useRouter();

const showDetail = (id) => {
  router.push('/detail/' + id);
};

onMounted(() => {
  storeBooks.fetchData();
  if (route.params.id) {
    setTimeout(() => {
      const elem = 'book' + route.params.id;
      document.getElementById(elem).scrollIntoView();
    }, '500');
  }
});
</script>

<style scoped></style>
