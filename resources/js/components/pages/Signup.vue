<template>
    <div>
        <navigation page="login"></navigation>
        <v-container class="mt-10">
            <v-row justify="center">
                <v-col md="6" align="center">
                    <h1 v-if="client === 'landlord'">Create a Lardlord Account</h1>
                    <h1 v-else>Create a Tenant Account</h1>
                    <v-form v-model="valid">
                        <v-container>
                            <v-row md="12" justify="center">
                                <v-col cols="12" md="6" class="d-flex">
                                    <v-text-field v-model="first_name" label="First Name" required></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6" class="d-flex">
                                    <v-text-field v-model="last_name" label="Last Name"
                                                  required></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row md="12" justify="center">
                                <v-col cols="12" md="6" class="d-flex">
                                    <v-text-field v-model="email" :rules="emailRules" label="Email"
                                                  required></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6" class="d-flex">
                                    <v-select v-model="country" :items="country_list" label="Country"></v-select>
                                
                                </v-col>
                            </v-row>
                            <v-row md="12" justify="center">
                                <v-col cols="12" md="6" class="d-flex">
                                    <v-text-field :type="'password'" v-model="password" label="Password"
                                                  required></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6" class="d-flex">
                                    <v-text-field :type="'password'" v-model="password_confirmation"
                                                  label="Password Confirmation"
                                                  required></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                        <v-btn rounded large @click="handleSubmit">Create Account</v-btn>
                    </v-form>
                    <br>
                    <v-btn v-if="client === 'landlord'" text small @click="$router.push('/signup/tenant')"><u>Create a
                                                                                                              tenant
                                                                                                              account
                                                                                                              instead.</u>
                    </v-btn>
                    <v-btn v-else text small @click="$router.push('/signup/landlord')"><u>Create a landlord account
                                                                                          instead.</u></v-btn>
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
        name: "Signup",
        components: {navigation, foot},
        props: ['client'],
        data() {
            return {
                valid: false,
                country_list: ['United States', 'Philippines', 'United Kingdom'],
                first_name: '',
                last_name: '',
                email: '',
                country: '',
                password: '',
                password_confirmation: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid',
                ],
            }
        },
        created() {

        },
        methods: {
            handleSubmit(e) {
                e.preventDefault();
                this.$http.post('http://localhost:8080/api/auth/register', {
                    email: this.email,
                    first_name: this.first_name,
                    last_name: this.last_name,
                    country: this.country,
                    user_type: this.client,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                })
                    .then(response => {
                        alert("Registered successfully");
                        this.$router.push('/login');
                    })
                    .catch((error) => {
                        alert("Something went wrong.");
                    });
            }
        }
    }
</script>

<style scoped>

</style>
