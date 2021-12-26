<template>
  <section id="home" class="home-page main-layout">
    <div class="home-pic full">
      <h1>Welcome To My Portfolio</h1>
      <h2>Daniiel Dvir</h2>
    </div>
    <about />
    <skills />
    <projects />
    <content-me />
  </section>
</template>

<script>
import about from '../cmps/about.vue';
import skills from '../cmps/skills.vue';
import projects from '../cmps/projects.vue';
import contentMe from '../cmps/contact-me.vue';

export default {
  name: 'home-page',
  components: { about, skills, projects, contentMe },
};
</script>
