<template>
  <header class="header">
    <Container class="header-inner">
      <router-link class="logo" to="/">Instagram</router-link>

      <form>
        <input class="search" type="text" placeholder="Search..." />
      </form>

      <nav class="navigation">
        <router-link to="/">
          <IconHome v-if="$route.name !== 'Home'" /> <IconHomeFill v-else />
        </router-link>

        <router-link to="/direct">
          <IconDirectFill v-if="$route.name === 'Direct'" />
          <IconDirect v-else />
        </router-link>

        <router-link to="/explore">
          <IconExploreFill v-if="$route.name === 'Explore'" />
          <IconExplore v-else />
        </router-link>

        <router-link to="/profile"> Profile </router-link>
      </nav>
    </Container>
  </header>
</template>

<script>
import IconHome from "@/icons/home.svg";
import IconHomeFill from "@/icons/home-fill.svg";
import IconDirect from "../icons/direct.svg";
import IconDirectFill from "../icons/direct-fill.svg";
import IconExplore from "../icons/explore.svg";
import IconExploreFill from "../icons/explore-fill.svg";

import Container from "./Container";

export default {
  name: "MainHeader",
  components: {
    IconHome,
    IconHomeFill,
    IconDirect,
    IconDirectFill,
    IconExplore,
    IconExploreFill,
    Container,
  },
};
</script>

<style scoped>
.header {
  border-bottom: 1px solid rgb(var(--b6a));
}

.header-inner {
  height: 57px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
}

.logo {
  font-size: 1.6rem;
  font-weight: bold;
}

.search {
  text-align: center;
  border: 1px solid rgb(var(--b6a));
  background-color: rgb(var(--b3f));
  border-radius: 4px;

  input {
    width: 215px;
    height: 28px;
  }
}

.navigation {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

a {
  margin-left: 20px;
}
</style>
