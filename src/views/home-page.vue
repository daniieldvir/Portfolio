<template>
  <section id="home" class="home-page main-layout">
    <div class="home-pic full">
      <div>
        <h1>Daniiel Dvir</h1>
        <h2>
          Full Stack Development <span> &#9670; </span> Frontend Development
        </h2>
      </div>
    </div>
    <skills />
    <projects />
    <about />
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
