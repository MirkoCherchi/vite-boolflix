<script>
import axios from "axios";
import { store } from "../../store";

export default {
    methods: {
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
    <div class="container-header d-flex justify-content-between align-items-center p-4">
        <div class="left-header">
            <div class="logo">Logo</div>
        </div>
        <div class="right-header">
            <form @submit.prevent="search">
                <label for="search">Search</label>
                <input type="text" id="search" v-model="store.searchKey" />
                <button>Search</button>
            </form>
        </div>
    </div>
</template>

<style>
.container-header {
    background-color: red;
}
</style>
