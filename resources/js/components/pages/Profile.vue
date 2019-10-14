<template>
    <div>
        <profile-navigation page="profile"></profile-navigation>
        <v-container fill-height>
            <v-row justify="center">
                <h1>Hi {{ user.first_name }}!!</h1>
            </v-row>
        </v-container>
        <foot></foot>
        <loading v-show="isLoading"></loading>
    </div>
</template>

<script>
    import ProfileNavigation from "../ProfileNavigation";
    import Loading from '../Loader';
    import Foot from '../Footer';

    export default {
        name: "Profile",
        components: {ProfileNavigation, Loading, Foot},
        data() {
            return {
                isLoading: true,
                user: {
                    first_name: "",
                    last_name: "",
                    country: "",
                    email: "",
                    user_type: ""
                }
            }
        },
        created() {
            this.fetchUser();
        },
        methods: {
            fetchUser() {
                this.isLoading = true;

                if (localStorage.getItem('user') != null) {
                    this.user = JSON.parse(localStorage.getItem('user'));
                    this.isLoading = false;
                } else {
                    this.$http.post('http://localhost:8080/api/auth/me', {}, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + localStorage.getItem('jwt')
                        }
                    })
                        .then(response => {
                            this.user = response.data;
                            this.isLoading = false;
                        })
                        .catch(function (error) {
                            localStorage.removeItem('jwt');
                            this.isLoading = false;
                            this.$router.push('login');
                        });
                }
            }
        }
    }
</script>

<style scoped>

</style>
