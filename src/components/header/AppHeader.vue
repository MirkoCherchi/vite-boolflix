<script>
import axios from "axios";
import { store } from "../../store";

export default {
    methods: {
        // evento di ricerca quando viene chiamato
        search() {
            this.$emit("search");
        },
    },
    data() {
        return {
            store,
        };
    },
};
</script>

<template>
    <!-- Intestazione della pagina con logo e barra di ricerca -->
    <div class="container-header d-flex justify-content-between align-items-center p-4">
        <!-- Sezione sinistra con il logo di Mirkflix -->
        <div class="left-header col-6">
            <div class="logo"><img src="/logomirk.png" alt="LogoMirkflix"></div>
        </div>
        <!-- Sezione destra con la barra di ricerca -->
        <div class="right-header">
            <nav class="navbar">
                <!-- Form per la barra di ricerca -->
                <form class="container-fluid" @submit.prevent="search">
                    <div class="input-group">
                        <!-- Icona di ricerca cliccabile -->
                        <span @click="search" class="input-group-text mc-search" id="basic-addon1">
                            <font-awesome-icon class="icon" icon="magnifying-glass" />
                        </span>
                        <!-- Campo di input per la ricerca con il model legato a store.searchKey -->
                        <input v-model="store.searchKey" type="text" class=" mc-search" placeholder="Search"
                            aria-label="Search">
                    </div>
                </form>
            </nav>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/styles/typography' as *;

.container-header {
    background-color: $first-option-color;
}

/* Stile per l'immagine del logo */
img {
    width: 20%;
}

/* Stili per la barra di ricerca */
.mc-search {
    all: unset;
    background-color: #fff;
    padding: 5px;
    border-radius: 10px;
}

/* Stile per l'icona di ricerca */
.icon {
    cursor: pointer;
}
</style>
