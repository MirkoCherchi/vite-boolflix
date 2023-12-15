<script>
import axios from 'axios';
import { store } from '../../store';
export default {
    data() {
        return {
            store,
        }

    },

    methods: {

    }
};

</script>

<template>
    <div class="container-header">
        <div class="left-header">
            <div class="logo">Logo</div>
        </div>
        <div class="right-header">
            <input type="text" placeholder="Search">
            <button>Search</button>
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
