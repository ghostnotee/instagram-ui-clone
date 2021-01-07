<template>
  <header class="header">
    <router-link to="/">Instagram</router-link>

    <form>
      <input type="text" placeholder="Search..." />
    </form>

    <nav>
      <router-link to="/"> <IconHome /> <IconHomeFill /> </router-link>
      <router-link to="/direct">Direct</router-link>
      <router-link to="/explore">Explore</router-link>
      <router-link to="/profile">Profile</router-link>
    </nav>
  </header>
</template>

<script>
import IconHome from "@/icons/home.svg";
import IconHomeFill from "@/icons/home-fill.svg";

export default {
  name: "MainHeader",
  components: {
    IconHome,
    IconHomeFill,
  },
};
</script>

<style scoped>
.header {
  background-color: yellow;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  padding: 20px;
}
</style>
