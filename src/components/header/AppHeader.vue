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
    <div class="container-header">
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    background-color: red;
    padding: 0 20px;
}
</style>
