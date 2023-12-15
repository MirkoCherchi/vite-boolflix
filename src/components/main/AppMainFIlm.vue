<script>
export default {
    props: [
        "title",
        "original_title",
        "language",
        "vote",
        "languageMap",
        "imageUrl",
    ],
};
</script>

<template>
    <img class="img-fluid d-block" :src="imageUrl" :alt="title" />
    <h4>{{ title }}</h4>
    <h5>{{ original_title }}</h5>
    <p v-if="language === 'it'"><span class="fi fi-it"></span></p>
    <p v-else-if="language === 'en'"><span class="fi fi-gb"></span></p>
    <p v-else-if="languageMap[language]">
        <span :class="'fi fi-' + languageMap[language]"></span>
    </p>
    <p v-else><span class="fi fi-un"></span></p>

    <div>
        <font-awesome-icon icon="fa-solid fa-star" v-for="n in vote" />
        <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - vote" />
    </div>
</template>

<style></style>
