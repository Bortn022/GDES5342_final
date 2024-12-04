<script setup>
import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import projectData from "../MOCK_DATA.js";
import ProjectCard from "../components/projects/ProjectCard.vue";
</script>

<template>
  <primary-template>
    <div class="hero">
      <div class="hero-text">
      <h1>Welcome</h1>
      <p>to Cara's design portfolio</p>
      </div>
    </div>
    <section class="project-layout">
      <project-card v-for="(project, index) in projectData.data"
                    :key="index" :project-data="project"/>
    </section>
  </primary-template>
</template>

<style scoped>
.hero {
  background-image: url("../assets/landing_hero.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  position: relative;
  height: 20rem;
  width: auto;

  .hero-text {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 5rem 0 0 10vw;
    h1 {
      font-size: 4rem;
      margin: 0;
    }
    p {
      font-size: 1.2rem;
      margin: 0 0 0 1rem;
    }
  }
}
section{
  .project-layout {
    display: flex;
    flex-direction: column;
    justify-self: center;
    padding: 2rem 0;
    gap: 2rem;
    margin: 0 10rem;
  }
}

/*media queries*/
@media (width>700px){
  section{
    .project-layout {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
}

</style>