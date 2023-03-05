<template>
  <div>
    <input type="text" v-model="search">
    <button @click="fetchAliments">Rechercher</button>
    <ul>
      <li v-for="(aliment, index) in aliments" :key="index">
        <router-link :to="{ name: 'item', params: { alimentId: aliment.fdcId } }">
          {{ aliment.description }} - score : {{ alimentScore }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ItemDescriptionComponent"
}
</script>

<style scoped>

</style>