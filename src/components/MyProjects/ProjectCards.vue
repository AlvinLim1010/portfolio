<template>
  <div class="mx-4 sm:ml-8 sm:mx-0">
    <CardSlideUp />
    <div class="flex justify-between">
      <button
        class="bg-gray text-black font-bold rounded-lg h-10 w-24 ml-8"
        @click="contactUs"
      >
        Go To Code
      </button>
      <button
        class="bg-gray text-black font-bold rounded-lg h-10 w-24 mr-8"
        @click="contactUs"
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
  components: {
    CardSlideUp,
  },
};
</script>