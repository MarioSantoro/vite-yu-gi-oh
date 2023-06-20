<template>
    <main class="container mt-3">
        <AppFilterCard @select="selectType" @tutto="selectType" />
        <AppListCard />
    </main>
</template>
<script>
import axios from "axios"
import { store } from '../store.js'
import AppListCard from "./AppListCard.vue"
import AppFilterCard from "./AppFilterCard.vue"
export default {
    data() {
        return {

        }
    },
    components: {
        AppListCard,
        AppFilterCard
    },

    methods: {
        selectType(neddle = "All") {
            if (neddle === "All") {
                axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?num=71&offset=0`)
                    .then((response) => {
                        store.list = response.data.data
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                    .finally(function () {
                        // always executed
                    });
            } else {

                axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?num=71&offset=0&archetype=${neddle}`)
                    .then((response) => {
                        store.list = response.data.data
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                    .finally(function () {
                        // always executed
                    });
            }
        }
    },

    created() {
        this.selectType();
    }
}
</script>
<style lang="scss" scoped></style>