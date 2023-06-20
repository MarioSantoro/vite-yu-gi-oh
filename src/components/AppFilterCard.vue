<template >
    <div>
        <select name="arctype" id="type">
            <option v-for="(type) in listOfType" :value="type.archetype_name"> {{ type.archetype_name }} </option>
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
                console.log(this.listOfType)
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