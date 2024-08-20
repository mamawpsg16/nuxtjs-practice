<template>
    <div>
        <header>
            <nav>
                <ul>
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/posts">Posts</NuxtLink></li>
                </ul>
            </nav>
        </header>
        <slot />
    </div>
</template>
  