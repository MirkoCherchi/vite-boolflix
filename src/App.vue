<!-- App.vue -->

<script>
// Importa il componente AppHeader dal percorso specificato
import AppHeader from "./components/header/AppHeader.vue";
// Importa il componente AppMain dal percorso specificato
import AppMain from "./components/main/AppMain.vue";
// Importa lo store globale e Axios
import { store } from "./store";
import axios from "axios";

export default {
    // Definizione dei dati del componente
    data() {
        return {
            // Utilizza lo store come dato del componente
            store,
        };
    },
    // Definizione dei metodi del componente
    methods: {
        // Metodo chiamato quando viene eseguita una ricerca
        search() {
            // Esegue una richiesta API per i film utilizzando Axios
            axios
                .get(store.config.urlFilm, {
                    params: {
                        api_key: store.config.apiKey,
                        query: store.searchKey,
                    },
                })
                .then((response) => {
                    // Logga i risultati nella console (a scopo di debug)
                    console.log(response.data.results);
                    // Aggiorna i risultati della ricerca dei film nello store
                    this.store.searchResultFilm = response.data.results;
                });

            // Esegue una richiesta API per le serie TV utilizzando Axios
            axios
                .get(store.config.urlTv, {
                    params: {
                        api_key: store.config.apiKey,
                        query: store.searchKey,
                    },
                })
                .then((response) => {
                    // Logga i risultati nella console (a scopo di debug)
                    console.log(response.data.results);
                    // Aggiorna i risultati della ricerca delle serie TV nello store
                    this.store.searchResultTv = response.data.results;
                });
        },
    },
    // Definizione dei componenti utilizzati
    components: {
        // Dichiarazione dei componenti utilizzati nel template
        AppHeader,
        AppMain,
    },
};
</script>

<template>
    <!-- Utilizza il componente AppHeader e passa il metodo search come evento -->
    <AppHeader @search="search" />
    <!-- Utilizza il componente AppMain -->
    <AppMain />
</template>

<style lang="scss">
// Importa lo stile globale dal percorso specificato
@use "../src/assets/styles/style.scss";
</style>
