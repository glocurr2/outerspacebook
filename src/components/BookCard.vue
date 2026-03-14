<!--BookCard.vue -->
<template>
  <div
    v-for="book in bookList"
    :id="`book` + book.id"
    :key="book.id"
    class="display-book-home each-book"
  >
    <div>
      <img
        v-bind:src="`${siteUrl}` + book.image"
        v-bind:alt="book.title"
        class="img-display"
        @click="triggerEvent(book.id)"
      />
    </div>

    <div class="book-info">
      {{ book.title }} <br />
      by {{ book.author }}<br />
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  bookList: {
    type: Array,
  },
  siteUrl: {
    type: String,
  },
});

const emit = defineEmits(['show-detail']);

const triggerEvent = (theid) => {
  emit('show-detail', theid);
};
</script>
