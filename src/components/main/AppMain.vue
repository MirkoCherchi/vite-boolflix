<script>
import { store } from "../../store";
import AppMainFIlm from "../../components/main/AppMainFIlm.vue";
import axios from "axios";

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
        // Ottiene l'URL completo per l'immagine del film
        getFullImageUrl(Pathimg) {
            return `https://image.tmdb.org/t/p/w342${Pathimg}`;
        },

        // Calcolo del voto 
        voteStar(vote) {
            const finalVote = Math.ceil(vote / 2);
            return finalVote;
        },

        // Metodo che emette l'evento "search" quando chiamato
        search() {
            this.$emit("search");
        },

        // Mostra i film popolari ottenendo i dati dalle API
        showPopularFilm() {
            const apiKey = this.store.config.apiKey;
            const popularFilmUrl = this.store.config.popularFilm;
            const popularTvUrl = this.store.config.popularTv;

            // Effettua la chiamata API per i film popolari
            axios.get(popularFilmUrl, {
                params: {
                    api_key: apiKey,
                    language: this.store.language,
                },
            })
                .then(responseFilm => {
                    this.store.searchResultFilm = responseFilm.data.results;

                    // Effettua la chiamata API per le serie TV popolari
                    return axios.get(popularTvUrl, {
                        params: {
                            api_key: apiKey,
                            language: this.store.language,
                        },
                    });
                })
                .then(responseTv => {
                    this.store.searchResultTv = responseTv.data.results;
                })
                .catch(error => {
                    // Gestisce gli errori nel recupero dei dati delle API
                    console.error("Errore nel recupero dei film e delle serie TV popolari:", error);
                });
        },
    },
};
</script>

<template>
    <!-- Struttura principale della pagina -->
    <main class="container-fluid p-0">
        <!-- Sezione visualizzata quando non ci sono risultati di ricerca -->
        <div v-if="!store.searchResultFilm.length && !store.searchResultTv.length">
            <div class="center-cont">
                <div class="hero-container">
                    <div class="hero-content col-6">
                        <h1 class="hero-title">Benvenuto in Mirkflix</h1>
                        <p class="hero-subtitle">
                            Scopri un nuovo mondo di intrattenimento cinematografico e televisivo
                        </p>
                        <button class="hero-button" @click="showPopularFilm">
                            Inizia la tua avventura
                        </button>
                    </div>
                    <div class="hero-image col-6">
                        <img src="/logomirk.png" alt="Mirkflix Preview" />
                    </div>
                </div>
            </div>
        </div>

        <!-- Sezione visualizzata quando ci sono risultati di film -->
        <div v-else>
            <div class="" v-if="store.searchResultFilm.length">
                <h2 class="text-center">Film</h2>
                <div class="">
                    <ul class="d-flex gap-3 p-0">
                        <!-- Ciclo attraverso i risultati dei film e visualizzo i componenti AppMainFilm -->
                        <li class="" v-for="movie in store.searchResultFilm">
                            <AppMainFIlm :title="movie.title" :original_title="movie.original_title"
                                :language="movie.original_language" :vote="voteStar(movie.vote_average)"
                                :languageMap="store.languageMap" :imageUrl="getFullImageUrl(movie.poster_path)"
                                :overview="movie.overview" />
                        </li>
                    </ul>
                </div>
            </div>
            <!-- Sezione visualizzata quando non ci sono risultati di film -->
            <div v-else>
                <h2 class="text-center">Nessun Film presente</h2>
            </div>

            <!-- Sezione visualizzata quando ci sono risultati di serie TV -->
            <div v-if="store.searchResultTv.length">
                <h2 class="text-center">Serie TV</h2>
                <ul class="d-flex gap-3 p-0">
                    <!-- Ciclo attraverso i risultati delle serie TV e visualizzo i componenti AppMainFilm -->
                    <li v-for="tv in store.searchResultTv">
                        <AppMainFIlm :title="tv.name" :original_title="tv.original_name" :language="tv.original_language"
                            :vote="voteStar(tv.vote_average)" :languageMap="store.languageMap"
                            :imageUrl="getFullImageUrl(tv.poster_path)" :overview="tv.overview" />
                    </li>
                </ul>
            </div>
            <!-- Sezione visualizzata quando non ci sono risultati di serie TV -->
            <div v-else>
                <h2 class="text-center">Nessuna Serie TV presente</h2>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
@use "../../assets/styles/typography" as *;


.hero-container {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding: 150px;
}

.hero-content {
    max-width: 600px;
}

.hero-title {
    font-size: 2.5em;
    margin-bottom: 20px;
}

.hero-subtitle {
    font-size: 1.2em;
    margin-bottom: 30px;
}

.hero-button {
    padding: 10px 20px;
    font-size: 1em;
    background-color: $first-option-color;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.hero-button:hover {
    background-color: $second-option-color;
}

.hero-image {
    width: 30%;
}

.hero-image img {
    max-width: 100%;
}

/* Stili per la scrollbar orizzontale */
ul {
    overflow-x: auto;
    overflow-y: hidden;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 6px;

        &:hover {
            background-color: #ff0000;
        }
    }

    li {
        padding: 5px;
    }
}
</style>
