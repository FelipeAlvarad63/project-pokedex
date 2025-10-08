<template>
    <main class="home-page">
        <section class="flex flex-col h-screen items-center justify-center m-auto max-w-xl md:px-0 px-6 text-center">
            <figure class="w-full max-w-xs mx-auto mb-15">
                <img
                    src="../assets/img_pikachu_cover.svg"
                    class="w-full h-full"
                    loading="lazy"
                    alt="imagen de pikachu" />
            </figure>
            <div class="text-content">
                <h1 class="text-dark-10 font-bold text-2xl mb-[30px]">Welcome to pokedex</h1>
                <p class="text-gray-30 text-lg font-medium mb-[50px]">The digital encyclopedia created by Professor Oak is an
                    invaluable tool to Trainers in the Pokémon world.</p>
            </div>
            <router-link to="/pokemon-list" class="btn-primary inline-block cursor-pointer">
                Get started
            </router-link>
        </section>
    </main>
</template>