<template>
  <div class="home">
    <div class="timeline">
      <h1>Home</h1>
      <Post />
    </div>
    <div class="sidebar">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas neque
        animi tenetur eveniet unde illo? Incidunt hic corporis quasi eum? Atque,
        nihil dolor modi non reiciendis magni ratione enim nesciunt.
      </p>
    </div>
  </div>
</template>

<script>
import Post from "@/components/Post";
export default {
  name: "Home",
  components: { Post },
};
</script>

<style scoped>
.home {
  max-width: 605px;
  margin-left: auto;
  margin-right: auto;

  @media (--t) {
    max-width: none;
    display: grid;
    grid-template-columns: 1fr 295px;
    grid-gap: 30px;
  }
}

.sidebar {
  display: none;
  @media (--t) {
    display: block;
  }
}
</style>
