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
    <a class="navitems" href="/">Home</a> &nbsp;
    <a class="navitems" href="#/about">About</a> &nbsp;
    <a class="navitems" href="#/Work">Work</a>
    <a  href="" class="price">Current bid: 0.75 ETH</a>
    <a href="" class="price2">ETH: $1,703.74</a>
    <component :is="currentView" />
  </div>
</template>
<style>
.navitems{
  color: #fff;
}
a {
  text-decoration: none;
  font-size: 25px;
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
