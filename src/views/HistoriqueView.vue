<template>
  <h2 align="center" m="6">Historique : </h2>
  <v-table
      fixed-header
      height="300px"
  >
    <thead>
    <tr>
      <th class="text-left">
        Nom
      </th>
      <th class="text-left">
        Date
      </th>
      <th class="text-left">
        Score
      </th>
    </tr>
    </thead>
    <ListHistoriqueComponent v-for="(aliment, index) in aliments" :key="index" :aliment="aliment"
                             :formattedDate="formattedDate"></ListHistoriqueComponent>
  </v-table>

</template>

<script>
import {useAlimentStore} from "@/stores/HistoriqueStore";
import {defineComponent} from 'vue';
import ListHistoriqueComponent from "@/components/history/listHistoriqueComponent.vue";

export default defineComponent({
  name: "testView",
  components: {ListHistoriqueComponent},
  setup() {
    const alimentStore = useAlimentStore();
    return {
      aliments: alimentStore.aliments,
    };
  }, data() {
    return {
      formattedDate: ''
    };
  },
  created() {
    this.date = new Date();
    this.formattedDate = this.date.toLocaleString('fr-FR');
  },
})
;
</script>

<style scoped>

</style>