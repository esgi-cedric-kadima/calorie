<template>
  <span>
  {{ alimentScore >= 800 && alimentScore < 3000 ? "★☆☆☆☆" : "" }}
  {{ alimentScore >= 500 && alimentScore < 799 ? "★★☆☆☆" : "" }}
  {{ alimentScore >= 300 && alimentScore < 499 ? "★★★☆☆" : "" }}
  {{ alimentScore >= 151 && alimentScore < 299 ? "★★★★☆" : "" }}
  {{ alimentScore >= 0 && alimentScore < 150 ? "★★★★★" : "" }}
</span>

</template>

<script>
export default {
  name: "ScoreComponent",
  props: {
    alimentScore: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>