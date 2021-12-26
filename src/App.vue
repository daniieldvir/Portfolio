<template>
  <div id="app">
    <app-header />
    <home-page />
  </div>
</template>

<script>
import appHeader from './cmps/header.vue';
import HomePage from './views/home-page.vue';

export default {
  components: { appHeader, HomePage },
};
</script>
