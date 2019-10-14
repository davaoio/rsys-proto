<template>
    <v-toolbar>
        <router-link to="/" class="title-toolbar">
            <v-toolbar-title>
                RSYS
            </v-toolbar-title>
        </router-link>
        <div class="flex-grow-1"></div>
        <v-btn text @click="$router.push('/search')" :disabled="page === 'search'">Find New Home</v-btn>
        <v-btn text @click="$router.push('/profile')" :disabled="page === 'profile'">Profile</v-btn>
        <v-btn text @click="logout()" :disabled="page === 'logout'">Logout</v-btn>
        <v-btn text @click="$router.push('/usd')" :disabled="page === 'usd'">$USD</v-btn>
    </v-toolbar>
</template>

<script>
    export default {
        name: "ProfileNavigation",
        props: ['page'],
        methods: {
            logout() {
                this.$http.post('http://localhost:8080/api/auth/logout', {}, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
                    }
                })
                    .then(response => {
                        localStorage.removeItem('jwt');
                        localStorage.removeItem('user');
                        this.$router.push('/');
                    })
                    .catch((error) => {
                        localStorage.removeItem('jwt');
                        localStorage.removeItem('user');
                        this.$router.push('/');
                    });
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
