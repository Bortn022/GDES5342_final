<script setup>

</script>

<template>
  <body>
  <header>
    <router-link :to="{ name: 'Home' }">
      <img class="logo" src="../../src/assets/cara_bortnem_logo.svg" alt="Cara Bortnem Logo">
    </router-link>

    <div class="nav-links">
      <router-link :to="{ name: 'Home' }">HOME</router-link>
      <router-link :to="{ name: 'About' }">ABOUT</router-link>
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
    font-size: 1.1rem;
  }

  &.router-link-active {
    font-weight: bold;
    color: #cabead;
  }

  .logo {
    width: 8rem;
    height: auto;
    padding-bottom: .5rem;
    margin-left: 1rem;
  }

  .nav-links {
    padding-right: 2rem;
    align-self: center;
  }
}

/*section styles*/

/*footer styles*/
footer {
  border-top: #cabead 1px solid;
}
/*media queries*/
@media (width>1000px) {

}
</style>