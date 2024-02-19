<template>
  <div class="mx-4 sm:ml-8 sm:mx-0">
    <CardSlideUp 
      :imagePath="image"
      :title="title"
      :text=text
    />
    <div class="flex justify-between">
      <button
        class="bg-gray text-black bg-gray-500 font-bold rounded-lg h-12 w-32 ml-6 mt-5"
        @click="goToCode"
      >
        Go To Code
      </button>
      <button
        class="bg-gray text-black bg-gray-500 font-bold rounded-lg h-12 w-32 mr-6 mt-5"
        @click="videoDemo"
      >
        Video Demo
      </button>
    </div>
  </div>
</template>

<script>
import CardSlideUp from "@/components/MyProjects/CardSlideUp";

export default {
  name: "ProjectCards",
  props: {
    image: String,
    title: String,
    text: String,
    code: String,
    video: String,
  },
  components: {
    CardSlideUp,
  },
  methods: {
    goToCode() {
      window.open(this.code, '_blank');
    },
    videoDemo() {
      this.isProfilePictureOpen = true;
    },
  }
};
</script>