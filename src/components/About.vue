<script setup>

import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
</script>

<template>
  <primary-template>
    <section class="main">
      <div class="portrait">
        <img src="../assets/portrait_photo.jpg" alt="Portrait of Cara"/>
      </div>
      <div class="about-me">
        <h1>Hello!</h1>
        <p>My name is Cara (pronounced car-uh). <br/>
            I’m a graphic design student with an interest in branding and packaging, but what excites me most are the
            opportunities that allow me to embrace a diversity of tasks. I’ve been a creative since I could hold a
            pencil, honed my design skills for six years, and have over two years of professional experience. My passion
            lies in collaborating to bring ideas to life and in learning from the opportunities that each creative
            endeavor brings.</p>
      </div>
    </section>
  </primary-template>
</template>

<style scoped>

section {
  .main {
    display: flex;
    justify-self: center;
    flex-direction: column;
    max-width: 70vw;

    .portrait {
      img {
        width: 70vw;
        height: auto;
      }
    }

    .about-me {
      display: flex;
      flex-wrap: wrap;
      margin: 1rem;

      h1 {
        margin: 0;
      }
    }
  }
}

@media (width>1000px){
  section {
    .main {
      flex-direction: row;
      flex-wrap: wrap;

      .portrait {

        img {
          flex: calc(40%);
        }
      }

      .about-me {
        flex: calc(40%);
        max-width: 20vw;
      }
    }
  }
}
</style>