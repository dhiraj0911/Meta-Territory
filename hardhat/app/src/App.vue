<script>
import Home from "./Home.vue";
import About from "./About.vue";
import Work from "./Work.vue";
const routes = {
  "/": Home,
  "/about": About,
  "/Work": Work
};

export default {
  data() {
    return {
      currentPath: window.location.hash
    };
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || "/"];
    }
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
    });
  }
};
</script>

<template>
  <div class="nav">
    <a href="/">Home</a> &nbsp;
    <a href="#/about">About</a> &nbsp;
    <a href="#/Work">Work</a>
    <component :is="currentView" />
  </div>
</template>
<style>
a {
  text-decoration: none;
  font-size: 20px;
  color: #90ddfe;
  padding-left: 90px;
}
a:hover {
  font-size: 20px;
  color: #fff;
  text-align: center;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6,
    0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6;
}
.nav{
  margin-top: 30px;
}
.main {
  margin: 30px;
}
</style>