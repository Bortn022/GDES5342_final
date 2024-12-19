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
        <h2>Hello!</h2>
        <p>My name is Cara (pronounced car-uh). <br/>
            I’m a graphic design student with an interest in branding and packaging, but what excites me most are the
            opportunities that allow me to embrace a diversity of tasks. I’ve been a creative since I could hold a
            pencil, honed my design skills for six years, and have over two years of professional experience. My passion
            lies in collaborating to bring ideas to life and in learning from the opportunities that each creative
            endeavor brings.</p>
        <h4>Let's be in touch!</h4>
      </div>
    </section>
  </primary-template>
</template>

<style scoped>

/* TODO: -make page responsive & reduce image size */

section {
  .main {
    display: flex;
    justify-self: center;
    flex-direction: column;
    max-width: 70vw;
    margin: 2rem 0;

    .portrait {
      img {
        width: 70vw;
        height: auto;
      }
    }

    .about-me {
      display: flex;
      flex-wrap: wrap;
      padding: 1rem;
      text-align: center;
      justify-content: center;
    }

    p {
      font-size: 1.1rem;
    }
  }
}

@media (width>1000px){
  section {
    .main {
      flex-direction: row;
      align-items: center;
      max-width: 80vw;

      .portrait {
        img {
          width: 100%;
          padding: 1rem 0;
        }
      }

      .about-me {
        max-width: 40%;
        text-align: left;
        justify-content: flex-start;
        margin-left: 1rem;
      }

    }
  }
}
</style>