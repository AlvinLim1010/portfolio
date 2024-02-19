<template>
  <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50" v-if="isOpen" @click="closePopup">
    <div class="bg-white rounded-lg w-3/4 h-3/5 p-8">
      <div class="flex justify-between items-center mb-10">
        <h2>Video Popup</h2>
        <span class="cursor-pointer text-2xl" @click.stop="closePopup">&times;</span>
      </div>
      <div class="text-center">
        <video v-if="videoSrc" controls autoplay :src="videoSrc" class="w-full max-w-96"></video>
        <div v-else class="text-2xl text-gray-600">
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div>Video Unavailable!</div>
            <div>Please Contact Me for more Information</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    videoSrc: {
      type: String,
      required: true,
    },
  },
  methods: {
    closePopup() {
      this.$emit("close");
    },
  },
};
</script>