<script setup>
import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import projectData from "../MOCK_DATA.js";
import ProjectCard from "../components/projects/ProjectCard.vue";
</script>

<template>
  <primary-template>
    <div class="hero">
      <h1>Welcome to Cara's portfolio</h1>
    </div>
    <project-card v-for="(project, index) in projectData.data"
                  :key="index" :project-data="project"/>
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
  }

  h1 {
    padding-left: 4rem;
    position: absolute;
    top: 40%;
    left: 5%;
  }
</style>