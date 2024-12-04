<script setup>
defineProps({
  projectData: {
    type: Object,
    required: true
  }
})
</script>

<template>
    <div class="tempcard">
      <div class="coverimg">
        <!--    <img :src="'../path/to/img/'" + imageName = '.png'">-->
      </div>
      <div class="info">
        <h4> {{ projectData.project_name }} </h4>
        <p> {{ projectData.project_description }} </p>
        <p> {{ projectData.project_date }} </p>
      </div>
    </div>
</template>

<style scoped>
  .tempcard {
    border: solid 1px #cabead;
    aspect-ratio: 1/1;
    min-width: 250px;
    max-width: 40vw;
    display: flex;
  }

  .info {
    margin: 1rem;
  }



  /*media queries*/
  @media (width>700px) {
    .tempcard {
      min-width: 300px;
      flex: calc(27%);
    }
  }
</style>