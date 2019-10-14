<template>
        <v-toolbar>
            <router-link to="/" class="title-toolbar">
                <v-toolbar-title>
                    RSYS
                </v-toolbar-title>
            </router-link>
            <div class="flex-grow-1"></div>
            <v-btn text @click="$router.push('/')" :disabled="page === 'home'">Home</v-btn>
            <v-btn text @click="$router.push('/about')" :disabled="page === 'about'">About</v-btn>
            <v-btn v-if="this.is_logged" text @click="$router.push('/profile')" :disabled="page === 'profile'">Profile</v-btn>
            <v-btn v-if="!this.is_logged" text @click="$router.push('/login')" :disabled="page === 'login'">Login</v-btn>
            <v-btn v-if="!this.is_logged" rounded @click="$router.push('/signup/tenant')" :disabled="page === 'signup'">Sign Up</v-btn>
        </v-toolbar>
</template>

<script>
    export default {
        name: "Navigation",
        props: ['page'],
        data () {
            return {
                is_logged: false
            }
        },
        mounted() {
            if (localStorage.getItem('jwt') !== null) {
                this.is_logged = true;
            } else {
                this.is_logged = false;
            }
        }
    }
</script>

<style scoped>
    .title-toolbar {
        color: inherit;
        text-decoration: inherit;
    }
</style>
