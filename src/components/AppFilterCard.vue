<template >
    <div class="my-3">
        <select name="arctype" id="type">
            <option @click=" $emit('tutto', 'All')" value="All">All</option>
            <option v-for="(type, index) in listOfType" :value="type.archetype_name"
                @click=" $emit('select', type.archetype_name)">
                {{ type.archetype_name }}
            </option>
        </select>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            listOfType: [],
        }
    },
    created() {
        axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
            .then((response) => {
                this.listOfType = response.data.slice(0, 50)
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
<style lang="scss"></style>