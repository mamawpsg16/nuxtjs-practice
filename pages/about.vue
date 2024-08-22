<script setup lang="ts">
  function enableCustomLayout () {
    setPageLayout('custom')
  }
  // definePageMeta({
  //   layout: false,  //DISABLE LAYOUT
  // });
  definePageMeta({
    title: 'About Page Brodie',
  })
</script>

<template>
  <div>
    <button @click="enableCustomLayout">Update layout</button>
  </div>
</template>
