<template>
    <div>
        <header>
            <nav>
                <ul>
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/posts">Posts</NuxtLink></li>
                    <li><NuxtLink to="/components">Components</NuxtLink></li>
                </ul>
            </nav>
        </header>
        <slot />
    </div>
</template>

<script setup lang="ts">
    const route = useRoute()

    useHead({
        meta: [{ property: 'og:title', content: `App Name - ${route.meta.title}` }],
    })
</script>
