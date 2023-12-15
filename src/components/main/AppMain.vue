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
    methods: {
        getFullImageUrl(Pathimg) {
            return `https://image.tmdb.org/t/p/w300${Pathimg}`;
        },
        voteStar(vote) {
            const finalVote = Math.ceil(vote / 2);
            return finalVote;
        },
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
                        :language="movie.original_language" :vote="voteStar(movie.vote_average)"
                        :languageMap="store.languageMap" :imageUrl="getFullImageUrl(movie.poster_path)" />
                </li>
            </ul>
        </div>
        <div v-if="store.searchResultTv.length">
            <h2>Serie TV</h2>
            <ul>
                <li v-for="tv in store.searchResultTv">
                    <AppMainFIlm :title="tv.name" :original_title="tv.original_name" :language="tv.original_language"
                        :vote="voteStar(tv.vote_average)" :languageMap="store.languageMap"
                        :imageUrl="getFullImageUrl(tv.poster_path)" />
                </li>
            </ul>
        </div>
    </main>
</template>

<style></style>
