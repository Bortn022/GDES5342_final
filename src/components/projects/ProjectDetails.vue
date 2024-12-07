<script setup>
import PrimaryTemplate from "../../templates/PrimaryTemplate.vue";

import {onMounted} from "vue";
import projectData from '../../MOCK_DATA.js'
import {useRoute, useRouter} from 'vue-router';

const route = useRoute();
const router = useRouter();
const paramId = route.params.id;
const project = projectData.data.filter(project => project.id === paramId)[0]

onMounted(() => {
  if (!project) {
    router.push({
      name: 'Home'
    })
  }
})

defineProps({
  projectData: {
    type: Object,
    required: true
  },
  projectHero: {
    type: Object,
    required: true
  },
})
</script>

<template>
  <primary-template>
    <section class="project-layout">
      <img :src="'../../../../src/assets/' + projectHero" alt="img"/>
        <p> {{ projectData.project_name }} </p>
      <pre>{{ project }}</pre>
    </section>
  </primary-template>
</template>

<style scoped>
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
</style>