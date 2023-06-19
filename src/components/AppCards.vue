<template>
    <div class="card mb-3 ">
        <img :src="store.list[index].card_images[0].image_url" alt="">
        <div class="card-body">
            <div class="card-text fw-bold text-white fs-5">
                <p>{{ store.list[index].name }}</p>
            </div>
            <div class="card-text ">
                <p>{{ store.list[index].archetype }}</p>
            </div>
        </div>
    </div>
</template>
<script>
import { store } from '../store.js'
export default {
    data() {
        return {
            store,
        }
    },
    props: {
        index: Number,
    }
}
</script>
<style lang="scss" scoped>
@use "../styles/utilities/variables.scss";
@use "../styles/utilities/mixins.scss";

div.card {
    width: calc(100% / 5);

    div.card-body {
        background-color: #d48f38;
    }
}
</style>