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
    <router-link :to=" { name: 'ProjectDetails', params: { id: projectData.id } }">
      <div class="coverimg">
        <img :src="'../../../../src/assets/' + projectData.thumbnail" alt="img"/>
      </div>
      <div class="info">
        <div class="title">
          <h4> {{ projectData.name }} </h4>
          <p> {{ projectData.type }} </p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
h4 {
  font-size: 1.4rem;
  margin: 0.1rem;
}

p {
  font-size: 1rem;
  margin: 0;
}

a:hover {
  color: currentColor;
}

.tempcard {
  aspect-ratio: 1/1;
  min-width: 250px;
  max-width: 40vw;
  position: relative;
  border: solid 1px #cabead;
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
  background-color: #e3dadad9;
  transition: .5s ease;
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}


/*media queries*/
@media (width > 700px) {
  .tempcard {
    min-width: 300px;
    flex: calc(27%);
  }
}
</style>