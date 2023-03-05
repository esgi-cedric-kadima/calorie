<template>
  <v-table
      fixed-header
      height="300px"
  >
    <thead>
    <tr>
      <th class="text-left">
        Name
      </th>
    </tr>
    </thead>
    <tbody>
<!--    <tr-->
<!--        v-for="(ingredient, index) in alimentComposition" :key="index">-->
<!--      <td>{{ ingredient }}</td>-->
<!--    </tr>-->
    <tr>
      <td>{{ alimentComposition }}</td>
    </tr>
    </tbody>
  </v-table>
</template>

<script>
export default {
  name: "tableCompositionComponent",
  props: {
    alimentComposition: {
      type: Array,
      required: true,
    },
    mounted() {
      console.table(this.alimentComposition)
    }
  },
}
</script>

<style scoped>

</style>