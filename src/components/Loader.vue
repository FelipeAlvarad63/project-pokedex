<template>
    <div class="loader">
        <span class="spinner"></span>
        <span class="loading-text">Cargando...</span>
    </div>
</template>

<script setup>
// Nenhuma lógica necessária para um loader simples
</script>

<style scoped>
.loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100px;
}

.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #e0e0e0;
    border-top: 4px solid #3b82f6;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 10px;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.loading-text {
    color: #3b82f6;
    font-weight: 500;
    font-size: 1.1rem;
}
</style>