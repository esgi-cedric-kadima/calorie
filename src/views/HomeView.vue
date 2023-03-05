<script lang="ts">
import {defineComponent} from "vue";
import axios from "axios";
import {apiKey} from "../../apiKey";
import ListItemComponent from "@/components/home/ListItemComponent.vue";
import LottieHome from "@/components/home/LottieHome.vue";

export default defineComponent({
  name: "HomeView",
  components: {LottieHome, ListItemComponent},

  data() {
    return {
      aliments: [],
      InputSearch: this.search
    }
  },
  methods: {
    async fetchAliments() {
      const response = await axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=${this.InputSearch}&pageSize=8`)
      this.aliments = response.data.foods;

    },
    mounted() {
      console.log(this.aliments)
    }
  }
})
</script>
<template>
  <h1>Recherche aliments : </h1>
  mot clé : <input type="text" v-model="InputSearch">
  <v-btn @click="fetchAliments">
    Rechercher
  </v-btn>
  <v-container>
    <v-row align="center" justify="center" no-gutters>
      <LottieHome/>
    </v-row>
  </v-container>
  <v-container>
    <v-row>
      <ListItemComponent v-for="(aliment, index) in aliments" :key="index" :aliment="aliment"
                         :alimentScore=aliment.score></ListItemComponent>
    </v-row>
  </v-container>
</template>
<style scoped>
</style>
