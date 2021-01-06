<template>
  <div class="home">
    <h1>Home</h1>
    <CustomText>Merhaba Vue</CustomText>
    <CustomText class="a1" tag="p" size="small">Merhaba Vue</CustomText>
    <CustomText class="a2" tag="p" size="xsmall">Merhaba Vue</CustomText>
    <CustomText class="a3" tag="p" size="xxsmall">Merhaba Vue</CustomText>
    <IconHome width="60" height="60" />
  </div>
</template>

<script>
import CustomText from "@/components/CustomText";
import IconHome from "../icons/home.svg";

export default {
  name: "Home",
  components: {
    CustomText,
    IconHome,
  },
};
</script>

<style scoped>
.a1 {
  color: rgb(var(--f75));
}

.a2 {
  color: rgb(var(--b3f));
}

.a3 {
  color: rgb(var(--ba8));
}
</style>
