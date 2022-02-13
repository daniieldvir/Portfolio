<template>
  <section id="projects" class="projects main-layout">
    <h1 class="projects-h1">projects</h1>
    <div
      :class="project.forClass"
      v-for="project in projects"
      :key="project.projectName"
    >
      <div class="text">
        <h1>{{ project.projectName }}</h1>
        <p>{{ project.discretion }}</p>
        <p>Main Technology: {{ project.mainTechnology }}</p>
        <p v-if="project.database !== ''">
          Database:>Server Side: {{ project.serverSide }}
        </p>
        <p v-if="project.database !== ''">Database: {{ project.database }}</p>
        <p>Style: {{ project.style }}</p>
        <p v-if="project.otherTechnologies !== ''">
          Other Technologies: {{ project.otherTechnologies }}
        </p>
      </div>

      <div
        class="thumbnail-name-container"
        :class="[project.forClass + '-grid']"
      >
        <img class="proj-img" :src="project.img" />
      </div>

      <div :class="[project.forClass + '-btn']">
        <button><a :href="project.sourceCode">Source Code</a></button>
        <button><a :href="project.website">Website</a></button>
      </div>
    </div>
  </section>
</template>
<script>
import { projectsService } from '../services/projects-service.js';
export default {
  data() {
    return {
      projects: null,
    };
  },
  created() {
    this.loadProjects();
  },
  methods: {
    loadProjects() {
      projectsService.query().then((projects) => {
        (this.projects = projects), console.log(this.projects);
      });
    },
  },
};
</script>
