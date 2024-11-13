<script setup>

</script>

<template>
  <body>
  <header>
    <img class="logo" src="../../src/assets/cara_bortnem_logo.svg" alt="Cara Bortnem Logo">
    <div class="nav-links">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'About' }">About Me</router-link>
    </div>
  </header>

  <section>
    <slot></slot>
  </section>

  <footer>
    <h2>THIS IS THE FOOTER</h2>
  </footer>
  </body>
</template>

<style scoped>
/*header styles*/
header {
  display: flex;
  justify-content: space-between;
  padding: .5rem 0;
  margin: 0;
  border-bottom: #cabead 1px solid;

  a {
    padding: 0 1rem;
    font-size: 1.2rem;
  }

  .logo {
    width: 8rem;
    height: auto;
    padding-bottom: .5rem;
    margin-left: 3rem;
  }

  .nav-links {
    padding-right: 2rem;
    align-self: center;
  }
}

/*section styles*/

/*footer styles*/

/*media queries*/
@media (width>1000px) {

}
</style>