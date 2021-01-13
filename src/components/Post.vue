<template>
  <div class="post">
    <!-- header -->
    <header class="header section">
      <div class="header-author">
        <Avatar :size="40" />

        <div class="header-author-info">
          <div>
            <CustomText tag="b">selbilgenn</CustomText>
          </div>
          <div>
            <CustomText size="xsmall"> Seymen Köyü - Kestel/bursa </CustomText>
          </div>
        </div>
      </div>
      <div class="header-more">
        <button type="button"><IconMore /></button>
      </div>
    </header>

    <!-- media -->
    <div class="post-media">
      <img
        src="https://images.unsplash.com/photo-1610356575103-83bdd0338fac?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2226&q=80"
        alt=""
      />
    </div>

    <!-- action buttons -->
    <div class="action-buttons section">
      <button type="button">
        <IconLike />
      </button>
      <button type="button">
        <IconComment />
      </button>
      <button type="button">
        <IconDirect />
      </button>
      <button class="action-save" type="button">
        <IconSave />
      </button>
    </div>

    <!-- view count -->
    <div class="view-count section">
      <CustomText tag="b">1.367 beğenme</CustomText>
    </div>
    <!-- comment list -->

    <!-- date time -->

    <!-- comment form -->
  </div>
</template>

<script>
import Avatar from "./Avatar";
import CustomText from "./CustomText";
import IconMore from "../icons/more.svg";
import IconLike from "../icons/like.svg";
import IconComment from "../icons/comment.svg";
import IconDirect from "../icons/direct.svg";
import IconSave from "../icons/save.svg";

export default {
  name: "Post",
  components: {
    Avatar,
    CustomText,
    IconMore,
    IconLike,
    IconComment,
    IconDirect,
    IconSave,
  },
};
</script>

<style scoped>
.post {
  border-radius: 3px;
  border: 1px solid rgb(var(--b6a));
}

.section {
  padding-left: 16px;
  padding-right: 16px;
}

.header {
  height: 60px;
  display: flex;
  align-items: center;

  &-author {
    display: flex;
    align-items: center;
    &-info {
      margin-left: 8px;
    }
  }

  &-more {
    margin-left: auto;
  }
}

.action-buttons {
  height: 45px;
  display: flex;
  align-items: center;

  button {
    margin-right: 16px;
  }

  .action-save {
    margin-left: auto;
    margin-right: 0;
  }
}
</style>
