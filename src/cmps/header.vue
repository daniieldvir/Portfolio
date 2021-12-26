<template>
  <header class="main-nav" v-bind:class="{ 'nav-scrolled': !topOfPage }">
    <a href="#home" class="router-link" to="/">Home</a>
    <a href="#about" class="router-link" to="/about">About</a>
    <a href="#projects" class="router-link" to="/">Projects</a>
    <a href="#contact-me" class="router-link" to="/">Contact Me</a>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  props: {},
  data() {
    return {
      topOfPage: true,
    };
  },
  beforeMount() {
    window.addEventListener('scroll', this.handelScroll);
  },
  methods: {
    handelScroll() {
      if (window.pageYOffset > 0) this.topOfPage = false;
      else this.topOfPage = true;
    },
  },
};
</script>
