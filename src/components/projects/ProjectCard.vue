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
    height: 300px;
    width: 300px;
    display: flex;
  }

  .info {
    margin: 1rem;
  }



  /*media queries*/

  @media (width>1000px) {
    .main {

    }
  }

</style>