  <template>
    <v-table
        fixed-header
        height="300px"
    >
      <thead>
      <tr>
        <th class="text-left">
          Type nutrients
        </th>
        <th class="text-left">
          Qantity
        </th>
        <th class="text-left">
          Unit name
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="(aliment, index) in alimentNutriments" :key="index">
        <td>{{ aliment.nutrient.name }}</td>
        <td>{{ aliment.amount }}</td>
        <td>{{ aliment.nutrient.unitName }}</td>
      </tr>
      </tbody>
    </v-table>
  </template>

<script>
export default {
  name: "tableNutrientComponent",
  props: {
    alimentNutriments: {
      type: Object,
      required: true,
    },
  },
  mounted() {}
}
</script>

<style scoped>

</style>