<template>
    <div>
        <navigation page="home"></navigation>
        <v-container class="mt-10">
            <v-row align="center" justify="center">
                <h1>Odio ut enim blandit volutpat maecenas volutpat</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                   labore et dolore magna aliqua.</p>
                <search></search>
            </v-row>
        </v-container>
        <foot></foot>
    </div>
</template>

<script>
    import navigation from "../Navigation";
    import search from "../Search";
    import foot from "../Footer";

    export default {
        name: "Home",
        components: {search, navigation, foot}
    }
</script>

<style scoped>

</style>
