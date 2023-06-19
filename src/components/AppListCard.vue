<template>
    <div class="p-4 bg-white">
        <div class="cards-counter p-2">
            <p class="m-0">Found {{ store.list.length }}</p>
        </div>
        <div class="cards d-flex flex-wrap">
            <AppCards v-for="(cards, index) in store.list" :index="index" />
        </div>
    </div>
</template>
<script>
import { store } from '../store.js'
import AppCards from './AppCards.vue';
export default {
    data() {
        return {
            store,
        }
    },
    components: {
        AppCards,
    }
}
</script>
<style lang="scss" scoped>
@use "../styles/utilities/variables.scss";
@use "../styles/utilities/mixins.scss";

div.cards-counter {
    background-color: #212529;
    color: white;
}
</style>