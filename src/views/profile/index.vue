<template>
  <div class="home">
    <CustomText tag="h1">Profile Index</CustomText>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque molestias
      autem distinctio accusantium, velit sint itaque assumenda amet repudiandae
      at debitis in quidem, ipsam, rem modi fuga odio unde qui.
    </p>
    <div id="nav">
      <router-link to="/profile">Post</router-link> :)
      <router-link to="/profile/igtv">IGTV</router-link> :')
      <router-link to="/profile/save">Save</router-link> |
      <router-link to="/profile/tag">Tag</router-link>
    </div>

    <router-view />
  </div>
</template>

<script>
import CustomText from "@/components/CustomText";

export default {
  name: "Profile",
  components: {
    CustomText,
  },
};
</script>

<style scoped></style>
