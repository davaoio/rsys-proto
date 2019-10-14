<template>
    <div class="loader">
        <img :src="'../images/loader.gif'" alt="Loading...">
    </div>
</template>

<script>
    export default {
        name: "Loader"
    }
</script>

<style scoped>
    .loader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
    }
</style>
