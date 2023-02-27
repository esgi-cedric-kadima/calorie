<script lang="ts">
//import TheWelcome from '../components/TheWelcome.vue'
import {defineComponent} from "vue";
import axios from "axios";
import {apiKey} from "../../apiKey";


export default defineComponent({
  name: "HomeView",
  data() {
    return {
      aliments: [],
      search: '',
      alimentScore: {},
    }
  },
  methods: {
    async fetchAliments() {
      const response = await axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=${this.search}`)
      this.aliments = response.data.foods;
      this.alimentScore = response.data.foods.score;

    },
    mounted() {
    }
  }
})
</script>

<template>
  <main>
    <!--    <TheWelcome />-->
    <h1>Recherche aliments : </h1>
    mot clé : <input type="text" v-model="search">
    <button @click="fetchAliments">Rechercher</button>
    <ul>
      <li v-for="(aliment, index) in aliments" :key="index">
        <router-link :to="{ name: 'item', params: { alimentId: aliment.fdcId } }">
          {{ aliment.description }} - score : {{ alimentScore }}
        </router-link>
      </li>
    </ul>
  </main>
</template>
