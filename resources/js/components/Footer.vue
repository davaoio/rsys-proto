<template>
        <v-footer fixed>
            <v-container fluid>
                <v-row align="center" justify="center" class="mt-10 mb-10">
                    <v-btn text small>Home</v-btn>
                    <v-btn text small>About</v-btn>
                    <v-btn text small>Contact</v-btn>
                    <v-btn text small>Login</v-btn>
                    <v-btn text small>Signup</v-btn>
                    <v-btn text small>Terms & Conditions</v-btn>
                    <v-btn text small>Privacy Policy</v-btn>
                </v-row>
                <v-row align="center" justify="center">
                    <div>&copy; RSYS {{ new Date().getFullYear() }}</div>
                </v-row>
            </v-container>
        </v-footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

</style>
