<template>

    <tbody>
    <tr>
      <td>
        <router-link :to="{ name: 'item', params: { alimentId: aliment.fdcId, alimentScore: aliment.score } } ">
          {{ aliment.description }}
        </router-link>
        <cartComponent :aliment="aliment"/>
      </td>
      <td>{{ formattedDate }}</td>
      <td>{{ aliment.score }}</td>
<!--      <td><score-component :alimentScore="aliment.score" /></td>-->
    </tr>
    </tbody>
</template>

<script>

import CartComponent from "@/components/cartComponent.vue";

export default {
  name: "listHistoriqueComponent",
  components: {CartComponent},
  props: {
    aliment: {
      type: Object,
      required: true,
    },
    formattedDate: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>