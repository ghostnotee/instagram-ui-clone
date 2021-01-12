<template>
  <figure class="avatar">
    <img :src="src" :alt="alt" :width="size" :height="size" />
  </figure>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    src: {
      type: String,
      default:
        "https://instagram.fayt1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/117991871_158630222472724_6067260943467641405_n.jpg?_nc_ht=instagram.fayt1-1.fna.fbcdn.net&_nc_ohc=OnQGPFggAbIAX-BKI5_&tp=1&oh=47f108cc084be96e215624c912b97d36&oe=6025AC03",
    },
    alt: {
      type: String,
    },
    size: {
      type: Number,
    },
  },
};
</script>

<style scoped>
.avatar {
  display: inline-flex;
  padding: 2px;
  border-radius: 999px;
  background: linear-gradient(
    90deg,
    rgba(228, 0, 58, 1) 0%,
    rgba(237, 158, 90, 1) 50%
  );

  img {
    border-radius: inherit;
    border: 2px solid white;
  }
}
</style>
