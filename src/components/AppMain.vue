<template>
    <div class="selection container mt-3">
        <select name="type" id="type">
            <option value="Alien">Alien</option>
            <option value="Noble Knight">Noble Knight</option>
            <option value="Melodious">Melodious</option>
            <option value="Archfiend">Archfiend</option>
            <option value="Elemental HERO">Elemental HERO</option>
            <option value="Umi">Umi</option>
            <option value="ABC">ABC</option>
            <option value="A.I.">A.I.</option>
            <option value="@Ignister">@Ignister</option>
            <option value="Abyss Actor">Abyss Actor</option>
        </select>
    </div>
    <main class="container mt-3 d-flex justify-content-center align-items-center">
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
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=71&offset=0')
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
<style lang="scss" scoped></style>