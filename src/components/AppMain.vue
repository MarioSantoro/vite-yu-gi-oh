<template>
    <main class="container mt-3">
        <AppListCard />
    </main>
</template>
<script>
import axios from "axios"
import { store } from '../store.js'
import AppListCard from "./AppListCard.vue"
export default {
    data() {
        return {
        }
    },
    components: {
        AppListCard,
    },

    created() {
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=39&offset=0')
            .then((response) => {
                store.list = response.data.data
                console.log(store.list)
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
}
</script>
<style lang="scss" scoped>
main {
    height: calc(100vh - 88px);

}
</style>