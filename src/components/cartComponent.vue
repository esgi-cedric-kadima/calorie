<template>
  <span v-on:click="addAConsomation()" class="align-self-end"><v-icon>mdi-cart</v-icon></span>
</template>

<script>
import {useConsomationStore} from "@/stores/consomationStore";

export default {
  name: "cartComponent",
  setup() {
    const consomationStore = useConsomationStore();
    return {
      consomation: consomationStore.alimentsConsomation
    };
  },
  methods: {
    addAConsomation() {
      const setAlimentConsomation = useConsomationStore();
      setAlimentConsomation.addAConsomation(this.aliment);
    }
  },
  props: {
    aliment: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>