<template></template>
<script>
import axios from "axios"
import { store } from '../store.js'
export default {
    data() {
        return {
        }
    },
    created() {
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
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