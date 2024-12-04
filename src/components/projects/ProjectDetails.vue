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
</script>

<template>
  <primary-template>
    <h1>Project Details</h1>

    <pre>{{ project }}</pre>
  </primary-template>
</template>

<style scoped>

</style>