<script setup lang="ts">
function enableCustomLayout () {
  setPageLayout('custom')
}
// definePageMeta({
//   layout: false,  //DISABLE LAYOUT
// });
</script>

<template>
  <div>
    <button @click="enableCustomLayout">Update layout</button>
  </div>
</template>
