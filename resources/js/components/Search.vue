<template>
    <v-container fluid>
        <v-row align="center">
            <v-col class="d-flex" cols="12" sm="3">
                <v-select :items="country" label="Country"></v-select>
            </v-col>
            <v-col class="d-flex" cols="12" sm="3">
                <v-select :items="state" label="State/Region"></v-select>
            </v-col>
            <v-col class="d-flex" cols="12" sm="3">
                <v-select :items="city" label="City"></v-select>
            </v-col>
            <v-col class="d-flex" cols="12" sm="3">
                <v-btn rounded large block>Search</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

    export default {
        name: "Search",
        data: () => ({
            country: ['United States', 'Philippines', 'United Kingdom'],
            state: ['California', 'Florida', 'Texas', 'Hawaii'],
            city: ['Los Angeles', 'Miami', 'Austin', 'Honolulu'],
        }),
    }
</script>

<style scoped>

</style>
