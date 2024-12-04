<script setup>
defineProps({
  projectData: {
    type: Object,
    required: true
  },
  projectImg: {
    type: Object,
    required: true
  },
})
</script>

<template>
    <div class="tempcard">
      <router-link :to=" { name: 'ProjectDetails', params: { id: projectData.id } }">
      <div class="coverimg">
       <img :src= "'../../../../src/assets/' + projectImg" alt="img"/>
      </div>
      <div class="info">
        <h4> {{ projectData.project_name }} </h4>
        <p> {{ projectData.project_description }} </p>
        <p> {{ projectData.project_date }} </p>
      </div>
    </router-link>
    </div>
</template>

<style scoped>
  .tempcard {
    border: solid 1px #cabead;
    aspect-ratio: 1/1;
    min-width: 250px;
    max-width: 40vw;
    position: relative;

  }

  .tempcard:hover .info {
    opacity: 1;
  }

  .coverimg {
    position: absolute;
    img {
      width: 100%;
    }
  }

  .info {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: #e3dadacc;
  }


  /*media queries*/
  @media (width>700px) {
    .tempcard {
      min-width: 300px;
      flex: calc(27%);
    }
  }
</style>