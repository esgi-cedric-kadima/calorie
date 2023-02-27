<template>
  <main>
    <h1>{{ alimentDetails.description }} </h1>
    <ul v-if="alimentDetails">
      <li v-if="alimentDetails.brandName">category : {{ alimentDetails.brandName }}</li>
      <li v-if="alimentDetails.brandOwner">Maison mére : {{ alimentDetails.brandOwner }}</li>
      <li v-if="alimentDetails.marketCountry">Pays d'origine : {{ alimentDetails.marketCountry }}</li>
    </ul>

    <table>
      <thead>
      <tr>
        <th colspan="1">Type nutriment</th>
        <th colspan="1">Qantity</th>
        <th colspan="1">Nutriments unit name</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(aliment, index) in alimentNutriments" :key="index">
        <td>{{ aliment.nutrient.name }}</td>
        <td>{{ aliment.amount }}</td>
        <td>{{ aliment.nutrient.unitName }}</td>
      </tr>
      </tbody>
    </table>

  </main>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import axios from "axios";
import {apiKey} from "../../apiKey";


export default defineComponent({
  name: "ItemView",
  props: {
    alimentId: {
      type: String,
      required: true,
    },
  },
  methods: {
    async fetchAliments() {
      const response = await axios.get(`https://api.nal.usda.gov/fdc/v1/food/${this.alimentId}?api_key=${apiKey}`)

      this.alimentScore = response;
      this.alimentDetails = response.data;
      this.alimentNutriments = response.data.foodNutrients;
      console.log(this.alimentDetails)
    },
  },
  async mounted() {
    console.log("Le composant est monté avec ce id : " + this.alimentId)
    this.fetchAliments();
  },
  data() {
    return {
      error: null,
      alimentDetails: {},
      alimentNutriments: {},
      alimentScore: {},

    };
  },
});
</script>

<style scoped>
table,
td {
  border: 1px solid #333;
}

thead,
tfoot {
  background-color: #333;
  color: #fff;
}

</style>