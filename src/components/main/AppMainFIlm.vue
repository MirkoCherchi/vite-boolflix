<script>
export default {
    // Props ricevuti dal componente padre
    props: ["title", "original_title", "language", "vote", "languageMap", "imageUrl", "overview"],
    data() {
        // Dato locale per gestire la visibilità dell'immagine
        return {
            isImageAvailable: true,
        };
    },
    methods: {
        // Metodo chiamato in caso di errore del caricamento dell'immagine
        handleImageError() {
            this.isImageAvailable = false;
        },
    },
};
</script>

<template>
    <!-- Struttura della carta che può essere "rovesciata" -->
    <div class="flip-card">
        <div class="flip-card-inner">
            <!-- Parte anteriore della carta -->
            <div class="flip-card-front">
                <!-- Utilizza v-if per verificare se l'immagine è presente -->
                <img @error="handleImageError" v-if="isImageAvailable" class="img-fluid" :src="imageUrl" :alt="title" />
                <!-- Se l'immagine non è presente, mostra una scritta di fallback -->
                <div v-else>
                    <img class="imgnot" src="../../../public/logomirk.png" alt="mc logo">
                    <h2>Immagine non Disponibile</h2>
                </div>
            </div>
            <!-- Parte posteriore della carta -->
            <div class="flip-card-back">
                <!-- Informazioni sulla scheda -->
                <h4>{{ title }}</h4>
                <h5>{{ original_title }}</h5>
                <!-- Icona della lingua in base alla lingua del film/serie -->
                <p v-if="language === 'it'"><span class="fi fi-it"></span></p>
                <p v-else-if="language === 'en'"><span class="fi fi-gb"></span></p>
                <p v-else-if="languageMap[language]">
                    <span :class="'fi fi-' + languageMap[language]"></span>
                </p>
                <p v-else><span class="fi fi-un"></span></p>
                <!-- Panoramica dell'opera -->
                <p class="info">{{ overview }}</p>

                <!-- Visualizzazione del voto in stelle -->
                <div>
                    <font-awesome-icon icon="fa-solid fa-star" v-for="n in vote" />
                    <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - vote" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use '../../assets/styles/typography' as *;

/* Stile per l'immagine di fallback quando quella principale non è disponibile */
.imgnot {
    width: 100%;
}

/* Stili per la carta che può essere "rovesciata" */
.flip-card {
    background-color: transparent;
    width: 300px;
    height: 450px;
    perspective: 1000px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

/* Animazione di "rovesciamento" quando passi sopra la carta */
.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

/* Parte anteriore e posteriore della carta */
.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    overflow-y: auto;

    /* Stili per la barra di scorrimento su overflow */
    &::-webkit-scrollbar {
        width: 15px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 6px;

        &:hover {
            background-color: $second-option-color;
        }
    }
}

/* Stili per la parte anteriore della carta */
.flip-card-front {
    color: black;
    background-color: $primary-color;
}

/* Stili per la parte posteriore della carta */
.flip-card-back {
    background-color: $secondary-color;
    color: white;
    transform: rotateY(180deg);
    padding: 5px;
}

/* Stile per le informazioni sulla carta */
.info {
    font-size: 16px;
}
</style>
