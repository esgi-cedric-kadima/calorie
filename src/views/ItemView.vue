<template>
  <main>
    <h1>{{ alimentDetails.description }}
      <ScoreComponent :alimentScore="this.alimentScore"/>
      <cartComponent/>
    </h1>
    <small>Score : ({{ alimentScore }})</small>
    <h2 align="center" v-if="alimentDetails.brandName" >Informations : </h2>
    <v-col>
      <v-row>
        <ul v-if="alimentDetails">
          <li v-if="alimentDetails.brandName">
            <v-icon>mdi-tag</v-icon>
            Catégorie : {{ alimentDetails.brandName }}
          </li>
          <li v-if="alimentDetails.brandOwner">
            <v-icon>mdi-home</v-icon>
            Maison mère : {{ alimentDetails.brandOwner }}
          </li>
          <li v-if="alimentDetails.marketCountry">
            <v-icon>mdi-earth</v-icon>
            Pays d'origine : {{ alimentDetails.marketCountry }}
          </li>
        </ul>
      </v-row>
    </v-col>
    <v-col v-if="alimentDetails.ingredients">
      <h2 align="center">Composition : </h2>
      <v-row><br>
        <!--        <tableCompositionComponent :alimentComposition="alimentDetails.ingredients"/>-->
        <!--        {{ alimentDetails.ingredients }} - -->
        <!--        {{ compositionList}}-->
        {{ alimentDetails.ingredients }}
      </v-row>
    </v-col>
    <v-col>
      <h2 align="center">Nutriments : </h2>
    </v-col>

    <!--    <table>-->
    <!--      <thead>-->
    <!--      <tr>-->
    <!--        <th colspan="1">Type nutriment</th>-->
    <!--        <th colspan="1">Qantity</th>-->
    <!--        <th colspan="1">Nutriments unit name</th>-->
    <!--      </tr>-->
    <!--      </thead>-->
    <!--      <tbody>-->
    <!--      <tr v-for="(aliment, index) in alimentNutriments" :key="index">-->
    <!--        <td>{{ aliment.nutrient.name }}</td>-->
    <!--        <td>{{ aliment.amount }}</td>-->
    <!--        <td>{{ aliment.nutrient.unitName }}</td>-->
    <!--      </tr>-->
    <!--      </tbody>-->
    <!--    </table>-->
    <tableNutrientComponent :alimentNutriments="alimentNutriments"/>

  </main>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import axios from "axios";
import {apiKey} from "../../apiKey";
import TableNutrientComponent from "@/components/datail/tableNutrientComponent.vue";
import ScoreComponent from "@/components/ScoreComponent.vue";
import CartComponent from "@/components/cartComponent.vue";


export default defineComponent({
  name: "ItemView",
  components: {CartComponent, ScoreComponent, TableNutrientComponent},
  props: {
    alimentId: {
      type: Number,
      required: true,
    },
    alimentScore: {
      type: Number,
      required: true,
    }
  },
  methods: {
    async fetchAliments() {
      const response = await axios.get(`https://api.nal.usda.gov/fdc/v1/food/${this.alimentId}?api_key=${apiKey}`)
      this.alimentDetails = response.data;
      this.alimentNutriments = response.data.foodNutrients;
      this.alimentCompositionString = response.data.ingredients;
    },
    async ingedientToList() {
      this.compositionList = this.alimentCompositionString.split(',');
      console.log(this.compositionList);
    }
  },
  async mounted() {
    this.fetchAliments();
    this.ingedientToList();
  },
  data() {
    return {
      error: null,
      alimentDetails: {},
      alimentNutriments: {},
      alimentComposition: String,
      alimentCompositionString: "",
      compositionList: {},

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