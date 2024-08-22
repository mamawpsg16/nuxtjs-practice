<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <AppAlert>
      This is an auto-imported component
      <img src="/images/image.png" alt="Discover Nuxt 3" style="height:200px; width:200px;"/>
    </AppAlert>
    <button type="button" @click="fetchItems">Fetch Items</button>
    <button type="button" @click="addItemv1">Add Item</button>
    <ul>
      <!-- <li v-for="item of items" :key="item"> {{ item }}</li> -->
      <li v-for="item of data.items" :key="item"> {{ item }} </li>

    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Get runtime configuration
const runtimeConfig = useRuntimeConfig();
const apiUrl = runtimeConfig.public.apiUrl;
const url = `${apiUrl}/items`;

// const { items } = await $fetch(url);
// Assuming you have a reactive data object
const data = ref({ items: [] });

async function fetchItems() {
  // Await the fetch to correctly handle the asynchronous data
  const { data: items } = await useFetch(url)

  data.value.items = items.value.items; // Update the reactive data object with fetched items
}

// Convert the data to a reactive object if it's not already
// console.log(items,'items');

// Function to add an item
function addItemv1() {
  // if (data.value?.items) {
    data.value.items.push(100);
  // }
  // Update the original data if needed
  // data.value.items = items.value;
}

// const addedItems = ref<number[]>([]);
// function addItemv1() {
//   if (data.value?.items) {
//     data.value.items.push(100);
//     addedItems.value.push(100);
//   }
// }
// const { data, error, pending, refresh } = await useAsyncData('userDetails', () => $fetch(url));
// const data = await  useFetch(url);
// const data = await $fetch(url);
// const data = await useAsyncData('userDetails', () => $fetch(url));
// console.log(data,"data");

// const items = ref(data.value || []);
// Fetch initial items from the API
// const { data, refresh } = await useFetch(url);

// // Make items reactive
// const items = ref(data.value.items || []);

// // Watch for changes in data and update items
// watch(data, (newData) => {
//   items.value = newData.items || [];
// });
// Function to add an item
async function addItem() {
  // Post new item to the API
  await $fetch(url, {
    method: 'POST',
    body: {
      item: Math.trunc(Math.random() * 10)
    }
  });

  // Re-fetch the updated list of items
  // refresh();  // Refresh the data after adding an item
}

// const { data, error } = await useAsyncData('users', () => $fetch(url))
// const items = data.value.items || [];
// console.log(data,error, "data,error");
// console.log(useNuxtData('users'),"users");
</script>

