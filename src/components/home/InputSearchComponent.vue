<template>
  mot clé : <input type="text" v-model="search">
</template>

<script>
export default {
  name: "InputSearchComponent",
  data() {
    return {
      search: "",
    };
  },
}
</script>

<style scoped>

</style>