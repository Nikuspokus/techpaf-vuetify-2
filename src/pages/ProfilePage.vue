<template>
  <v-container class="pa-10">
    <stories-section />
    <v-divider color="#0197bf" class="my-14"></v-divider>

    <feed-section />
  </v-container>
</template>

<script>
import StoriesSection from "../components/StoriesSection";
import FeedSection from "../components/FeedSection";
export default {
  components: {
    StoriesSection,
    FeedSection
  }
};
</script>

<style>
</style>