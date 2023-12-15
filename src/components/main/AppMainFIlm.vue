<script>

export default {
    props: ["title", "original_title", "language", "vote", 'languageMap', 'imageUrl'],
};
</script>

<template>
    <div>
        <img :src="imageUrl" :alt="title" />
        <h3>{{ title }}</h3>
        <h4>{{ original_title }}</h4>
        <p v-if="language === 'it'"><span class="fi fi-it"></span></p>
        <p v-else-if="language === 'en'"><span class="fi fi-gb"></span></p>
        <p v-else-if="languageMap[language]">
            <span :class="'fi fi-' + languageMap[language]"></span>
        </p>
        <p v-else><span class="fi fi-un"></span></p>

        <p>{{ vote }}</p>
    </div>
</template>

<style></style>
