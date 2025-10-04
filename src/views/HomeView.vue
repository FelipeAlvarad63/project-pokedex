<script setup>

</script>

<template>
    <main class="home-page max-w-xl flex flex-col items-center justify-center">
        <figure>
            <img src="../assets/img_pikachu_cover.svg" loading="lazy" alt="imagen de pikachu" />
        </figure>
        <div>
            <h1 class="text-dark-10 font-bold text-2xl">Welcome to pokedex</h1>
            <p class="text-gray-30 text-lg font-medium">The digital encyclopedia created by Professor Oak is an
                invaluable tool to Trainers in the Pokémon world.</p>
        </div>
        <router-link to="/pokemon-list">
        <button class="btn-primary cursor-pointer">Get started</button>
        </router-link>
    </main>
</template>