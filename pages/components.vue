<template>
    <div>
      <h1>{{ title }}</h1>
      <button type="button" @click="revertBoolean">Opposite</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, watch } from 'vue';
  
  const title = ref('Hello World');
  const isTrue = ref(false);
  
  // Function to toggle the boolean
  const revertBoolean = () => {
    isTrue.value = !isTrue.value;
  };
  
  // Watch for changes in isTrue or title and update the head
  watch([isTrue, title], () => {
    useHead({
      titleTemplate: (currentTitle) => {
        return isTrue.value ? `${currentTitle} - Site Title` : 'Site Title';
      },
      meta: [
        { name: 'description', content: title.value }
      ],
      style: [
        { children: 'body { background-color: green; }' }
      ]
    });
  }, { immediate: true });
  </script>
  