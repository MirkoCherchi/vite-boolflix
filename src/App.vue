<script>
import AppHeader from './components/header/AppHeader.vue';
import AppMain from './components/main/AppMain.vue';
import { store } from './store';
import axios from 'axios';

export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        search() {
            axios.get(store.config.urlFilm, {
                params: {
                    api_key: store.config.apiKey,
                    query: store.searchKey,
                },
            }).then((response) => {

                this.store.searchResultFilm = response.data.results;
            });

            axios.get(store.config.urlTv, {
                params: {
                    api_key: store.config.apiKey,
                    query: store.searchKey,
                },
            }).then((response) => {

                this.store.searchResultTv = response.data.results;
            });
        },
    },
    components: {
        AppHeader,
        AppMain,
    }
};
</script>

<template>
    <form @submit.prevent="search">
        <label for="search">Search</label>
        <input type="text" id="search" v-model="store.searchKey">
        <button>Search</button>
    </form>

    <div>
        <h2>Film</h2>
        <ul>
            <li v-for="film in store.searchResultFilm">
                <h3>{{ film.title }}</h3>
                <h4>{{ film.original_title }}</h4>
                <p>{{ film.original_language }}</p>
                <p>{{ film.vote_average }}</p>
            </li>
        </ul>
    </div>
    <div>
        <h2>Tv</h2>
        <ul>
            <li v-for="tv in store.searchResultTv">
                <h3>{{ tv.name }}</h3>
                <h4>{{ tv.original_name }}</h4>
                <p>{{ tv.original_language }}</p>
                <p>{{ tv.vote_average }}</p>
            </li>
        </ul>
    </div>
    <!-- <AppHeader />
    <AppMain /> -->
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
