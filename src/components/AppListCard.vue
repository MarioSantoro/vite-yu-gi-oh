<template>
    <div class="p-4 bg-white" v-if="store.list.length > 0">
        <div class="cards-counter p-2">
            <p class="m-0">Found {{ store.list.length }}</p>
        </div>
        <div class="cards d-flex flex-wrap">
            <AppCards v-for="(cards, index) in store.list" :index="index" />
        </div>
    </div>

    <div class="shadow" v-else>
        <div class="loader">
            <div class="item top"></div>
            <div class="item left"></div>
            <div class="item right"></div>
            <div class="item bottom"></div>
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

.shadow {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    box-shadow: 0 15px 55px rgba(0, 0, 0, 0.2);
    background-color: #374259;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.loader {
    display: grid;
    place-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    animation: rotate 2s infinite linear;
}

.item {
    position: absolute;
    width: 25px;
    height: 25px;
    background-color: #00DFA2;
    border-radius: 50%;
}

@keyframes top {

    from,
    to {
        transform: translateY(-15px);
    }

    50% {
        transform: translateY(-40px);
    }
}

.top {
    animation: top 1s infinite linear;
}

@keyframes left {

    from,
    to {
        transform: translateX(-15px);
    }

    50% {
        transform: translateX(-40px);
    }
}

.left {
    animation: left 1s infinite linear;
}

@keyframes right {

    from,
    to {
        transform: translateX(15px);
    }

    50% {
        transform: translateX(40px);
    }
}

.right {
    background-color: #0079FF;
    animation: right 1s infinite linear;
}

@keyframes bottom {

    from,
    to {
        transform: translateY(15px);
    }

    50% {
        transform: translateY(40px);
    }
}

.bottom {
    animation: bottom 1s infinite linear;
}</style>