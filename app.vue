<template>
    <NuxtLayout>
      <NuxtLoadingIndicator :throttle="0" :height="4"/>
      <NuxtPage />
    </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})

useSeoMeta({
  title: 'My Amazing Site',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})


// You might choose this based on an API call or logged-in status
const layout = "custom";
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

<!-- You can directly override the default layout for all pages using the name property of <NuxtLayout>: -->
<!-- <template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template> -->