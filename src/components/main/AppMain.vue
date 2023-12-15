<script>
import { store } from "../../store";
import AppMainFIlm from "../../components/main/AppMainFIlm.vue";

export default {
    components: {
        AppMainFIlm,
    },
    data() {
        return {
            store,
        };
    },
};
</script>

<template>
    <main>
        <div v-if="store.searchResultFilm.length">
            <h2>Film</h2>
            <ul>
                <li v-for="movie in store.searchResultFilm">
                    <AppMainFIlm :title="movie.title" :original_title="movie.original_title"
                        :language="movie.original_language" :vote="movie.vote_average" :languageMap="store.languageMap" />
                </li>
            </ul>
        </div>
        <div v-if="store.searchResultTv.length">
            <h2>Serie TV</h2>
            <ul>
                <li v-for="tv in store.searchResultTv">
                    <AppMainFIlm :title="tv.name" :original_title="tv.original_name" :language="tv.original_language"
                        :vote="tv.vote_average" :languageMap="store.languageMap" />
                </li>
            </ul>
        </div>
    </main>
</template>

<style></style>
