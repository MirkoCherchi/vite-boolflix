<script>
import AppHeader from "./components/header/AppHeader.vue";
import AppMain from "./components/main/AppMain.vue";
import { store } from "./store";
import axios from "axios";

export default {
    data() {
        return {
            store,
        };
    },
    methods: {
        search() {
            axios
                .get(store.config.urlFilm, {
                    params: {
                        api_key: store.config.apiKey,
                        query: store.searchKey,
                    },
                })
                .then((response) => {
                    console.log(response.data.results);

                    this.store.searchResultFilm = response.data.results;
                });

            axios
                .get(store.config.urlTv, {
                    params: {
                        api_key: store.config.apiKey,
                        query: store.searchKey,
                    },
                })
                .then((response) => {
                    console.log(response.data.results);
                    this.store.searchResultTv = response.data.results;
                });
        },
    },
    components: {
        AppHeader,
        AppMain,
    },
};
</script>

<template>
    <AppHeader @search="search" />
    <AppMain />
</template>

<style lang="scss">
@use "../src/assets/styles/style.scss";
</style>
