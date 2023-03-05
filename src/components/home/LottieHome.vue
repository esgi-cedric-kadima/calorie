<template>
  <div ref="lottieContainer"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import lottie from 'lottie-web';

export default defineComponent({
  name: 'LottieHome',
  mounted() {
    const container = this.$refs.lottieContainer as HTMLDivElement;

    lottie.loadAnimation({
      container,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets5.lottiefiles.com/packages/lf20_unycsfzn.json',
    });
  },
});
</script>
