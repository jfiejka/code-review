<script lang="ts" setup>
import {RouterLink, RouterView} from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";</script>

<template>
  <header>
    <img
        alt="Vue logo"
        class="logo"
        height="125"
        src="@/assets/logo.svg"
        width="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!"/>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/user">User</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView/>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  font-size: 12px;
  margin-top: 2rem;
  text-align: center;
  width: 100%;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  border-left: 1px solid var(--color-border);
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    padding-right: calc(var(--section-gap) / 2);
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    flex-wrap: wrap;
    place-items: flex-start;
  }

  nav {
    font-size: 1rem;
    margin-left: -1rem;
    margin-top: 1rem;

    padding: 1rem 0;
    text-align: left;
  }
}
</style>
