<script setup>
defineProps({
  projectData: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <section class="main">
    <div class="tempcard">
      <div class="coverimg">
        <!--    <img :src="'../path/to/img/'" + imageName = '.png'">-->
      </div>
      <div class="info">
        <h5> {{ projectData.project_name }} </h5>
        <p> {{ projectData.project_description }} </p>
        <p> {{ projectData.project_date }}</p>
      </div>
    </div>
  </section>


</template>

<style scoped>
section.main{
  display: flex;
  flex-direction: row;
  justify-content: center;
}

div.tempcard {
  height: 300px;
  width: 300px;
  border: solid 1px #cabead;
  margin: 1rem;
}

/*media queries*/

@media (width>1000px) {
  section.main {

  }
}
</style>