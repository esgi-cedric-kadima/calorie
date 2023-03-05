<template>
  <v-card>
    <v-container>
      <v-row>
        <v-card
            color="#385F73"
            theme="dark"
        >
          <v-card-title class="text-h6">
            {{ this.aliment.description }} <cartComponent :aliment="aliment"/>
          </v-card-title>

          <v-card-subtitle>
            <span v-if="this.aliment.brandName">Brand : {{ this.aliment.brandName }}</span><br>
            <span v-if="this.aliment.brandOwner">Brand Owner : {{ this.aliment.brandOwner }}</span><br>
            <span v-if="this.aliment.marketCountry">Country : {{ this.aliment.marketCountry }}</span><br>
            <span v-if="this.aliment.foodCategory">Category : {{ this.aliment.brandName }}</span><br>
            <span v-if="this.aliment.publishedDate">Date : {{ this.aliment.publishedDate }}</span><br>
            <span v-if="this.aliment.score">
              score : <ScoreComponent :alimentScore=this.aliment.score /><small>({{ this.aliment.score}})</small>
            </span>
          </v-card-subtitle>

          <v-card-actions>
            <v-btn variant="text">
              <router-link v-on:click="storeAliment()" :to="{ name: 'item', params: { alimentId: aliment.fdcId, alimentScore: aliment.score } } ">
                More details
              </router-link>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import ScoreComponent from "@/components/ScoreComponent.vue";
import {useAlimentStore} from "@/stores/HistoriqueStore";
import CartComponent from "@/components/cartComponent.vue";

export default {
  name: "ListItemComponent",
  components: {CartComponent, ScoreComponent},
  props: {
    aliment: {
      type: Object,
      required: true,
    }
  },
  methods: {
    storeAliment() {
      const alimentStore = useAlimentStore();
      alimentStore.addAliment(this.aliment);
    }
  }
};
</script>

<style scoped>

</style>