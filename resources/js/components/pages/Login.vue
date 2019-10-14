<template>
    <div>
        <navigation page="login"></navigation>
        <v-container class="mt-10">
            <v-row justify="center">
                <v-col md="4" align="center">
                    <h1>Log-into RSys</h1>
                    <v-form v-model="valid">
                        <v-container>
                            <v-text-field v-model="email" :rules="emailRules" label="Email" required></v-text-field>
                            <v-text-field :type="'password'" v-model="password" label="Password"
                                          required></v-text-field>
                        </v-container>
                        <v-btn rounded large @click="handleSubmit">Login</v-btn>
                    </v-form>
                    <br>
                    <v-btn text small @click="$router.push('/signup')"><u>Create an account instead.</u></v-btn>
                </v-col>
            </v-row>
        </v-container>
        <foot></foot>
    </div>
</template>

<script>
    import navigation from "../Navigation";
    import foot from "../Footer";

    export default {
        name: "Login",
        components: {navigation, foot},
        data() {
            return {
                valid: false,
                email: '',
                password: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid',
                ],
            }
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault();
                this.$http.post('http://localhost:8080/api/auth/login', {
                    email: this.email,
                    password: this.password
                })
                    .then(response => {
                        localStorage.setItem('jwt', response.data.access_token);
                        localStorage.setItem('user', JSON.stringify(response.data.user));
                        if (localStorage.getItem('jwt') != null) {
                            if (this.$route.params.nextUrl != null) {
                                this.$router.push(this.$route.params.nextUrl)
                            } else {
                                this.$router.push('profile');
                            }
                        }
                    })
                    .catch((error) => {
                        alert("Wrong credentials.");
                    });
            }
        }
    }
</script>

<style scoped>

</style>
