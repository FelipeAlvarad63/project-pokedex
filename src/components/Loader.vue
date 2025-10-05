<template>
    <div class="loader">
        <figure class="container__img-loader w-40 h-40 animate-spin">
            <img class="w-full h-full" src="../assets/img_loader.svg" loading="lazy" alt="img de pokebola girando" />
        </figure>
    </div>
</template>

<style scoped>

.container__img-loader {
    animation: spin 1.5s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>