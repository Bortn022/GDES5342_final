<script setup>
import PrimaryTemplate from "../../templates/PrimaryTemplate.vue";

import {onMounted} from "vue";
import projectData from '../../MOCK_DATA.js';
import {useRoute, useRouter} from 'vue-router';

const route = useRoute();
const router = useRouter();
const paramId = route.params.id;
const project = projectData.data.find(project => project.id === paramId);

onMounted(() => {
  if (!project) {
    router.push({
      name: 'Home'
    })
  }
});
</script>

<template>
  <primary-template>
    <section class="project-layout">
      <img :src="'../../../../src/assets/' + project.hero" alt="hero img"/>
      <div class="full-story">
        <h2> {{ project.name }} </h2>
        <p class="subtitle"> {{ project.type }} </p>

        <div class="intro">
          <div class="intro-image">
            <img :src="'../../../../src/assets/' + project.intro" alt="intro photo"/>
          </div>
          <p class="description"> {{ project.description }} </p>
        </div>

        <div class="process">
            <div v-for="(image, index) in project.processImages" :key="index" class="process-slide">
              <img :src="'../../../../src/assets/' + image.src" alt="{{ image.caption }}"/>
              <p class="caption">{{ image.caption }}</p>
            </div>
        </div>
        <h4>Final Product</h4>
        <div class="outcome">
            <div v-for="(outcomeImage, index) in project.outcomeImages" :key="index" class="outcome-slide">
              <img :src="'../../../../src/assets/' + outcomeImage.src" alt="outcome slide image"/>
            </div>
        </div>
      </div>
    </section>
  </primary-template>
</template>

<style scoped>
section {
  .project-layout {
    display: flex;
    flex-direction: column;
    justify-self: center;
    padding: 0;
    margin: 0;

    img {
      max-width: 100%;
    }

    h4 {
      justify-self: center;
      padding-top: 2rem;
    }

    .full-story {
      padding: 1rem 3rem;

      img {
        display: flex;
        margin: 1rem 0;
        justify-self: center;
      }

      .description {
        justify-self: center;
      }

      .process, .outcome {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .process {
        flex-wrap: wrap;

        img {
          min-width: 25rem;
          max-width: 30vw;
        }

        .process-slide {
          padding: 0 1rem;
        }
      }

      .outcome {
        flex-direction: column;
        img {
          max-width: 80vw;
        }
      }

    }

    .subtitle {
      padding-bottom: 1rem;
    }

    .caption {
      padding-bottom: 1rem;
      justify-self: center;
      font-size: .8rem;
    }

  }
}

@media (width>1000px) {
  section {
    .project-layout {
      margin: 0 10vw;
      flex-direction: row;
      flex-wrap: wrap;

      .full-story {
        img {
          max-width: 25vw;
        }
        .intro {
          display: flex;
          flex-direction: row;
          align-items: center;

          .intro-image{
            img {
              max-height: 300px;
            }
          }

          .description {
            display: flex;
            padding-left: 2rem;
          }
        }

        .outcome {
          img {
            max-width: 60vw;
          }
        }
      }
    }
  }
}
</style>