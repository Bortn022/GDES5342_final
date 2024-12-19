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
    <section class="project-layout">
      <img :src="'../../../../src/assets/' + project.hero" alt="hero img"/>
      <div class="full-story">
        <h2> {{ project.name }} </h2>
        <p> {{ project.type }} </p>
        <div class="intro">
          <img :src="'../../../../src/assets/' + project.hero" alt="intro img"/>
          <p id="description"> {{ project.description }} </p>
        </div>
        <div class="process">
          <div class="slides">
            <!-- (A1) SLIDE 1 -->
            <input type="radio" name="slides" id="slide1" checked>
            <figure>
              <img src="#">
              <figcaption>Hot Coffee</figcaption>
              <label for="slide2" class="next">&#9654;</label>
            </figure>

            <!-- (A2) SLIDE 2 -->
            <input type="radio" name="slides" id="slide2">
            <figure>
              <img src="#">
              <figcaption>Iced Coffee</figcaption>
              <label for="slide1" class="last">&#9664;</label>
              <label for="slide3" class="next">&#9654;</label>
            </figure>

            <!-- (A3) SLIDE 3 -->
            <input type="radio" name="slides" id="slide3">
            <figure>
              <img src="#">
              <figcaption>Canned Coffee</figcaption>
              <label for="slide2" class="last">&#9664;</label>
            </figure>
          </div>
        </div>
        <div class="outcome">
        </div>
      </div>
    </section>
  </primary-template>
</template>

<style scoped>
/* TODO: - style mobile view of page & make it responsive */
section {
  .project-layout {
    display: flex;
    flex-direction: column;
    justify-self: center;
    padding: 0;
    margin: 0;

    .full-story {
      padding: 1rem;
    }

    img {
      max-width: 100%;
    }

    /* (PART A) SHOW SELECTED SLIDE ONLY */
    .slides input[type="radio"] { display: none; }
    .slides figure {
      visibility: hidden; opacity: 0;
      transition: all 0.5s;
    }
    .slides input[type="radio"]:checked + figure {
      visibility: visible; opacity: 1;
    }
  }
}

@media (width>1000px) {
  section {
    .project-layout {
      margin: 0 10vw;

      img {

      }
    }
  }
}
</style>