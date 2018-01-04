<template>
  <div id="app">
    <!--img src="./assets/logo.png">
    <router-view/-->
    <default-layout></default-layout>
  </div>
</template>

<script>
  import defaultLayout from '~/layouts/default.vue';

  export default {
    name: 'app',
    components: {
      defaultLayout,
    },
  }
</script>