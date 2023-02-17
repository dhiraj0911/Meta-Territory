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
    <a href="" class="price">Current Meta Land</a>
    <a href="" class="price2">Current Price</a>
    <component :is="currentView" />
  </div>
</template>
<style>
a {
  text-decoration: none;
  font-size: 25px;
  color: linear-gradient(to right, #0D324D, #7F5A83);
  padding-left: 90px;
}
a:hover {

  color: rgb(241, 188, 88);
}
.nav{
  margin-top: 30px;
}
.main {
  margin: 30px;
}
</style>
