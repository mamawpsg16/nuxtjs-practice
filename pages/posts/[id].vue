<template>
    <div>
        {{ id }}
    </div>
</template>

<script setup>
   const route = useRoute()
   const id = route.params.id;
  definePageMeta({
        validate: async (route) => {
            // Check if the id is made up of digits
            return typeof route.params.id === 'string';
            // return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)
        }
    });
</script>

<style lang="scss" scoped>

</style>