<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// You might choose this based on an API call or logged-in status
const layout = "custom";
</script>

<!-- You can directly override the default layout for all pages using the name property of <NuxtLayout>: -->
<!-- <template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template> -->