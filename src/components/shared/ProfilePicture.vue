<template>
  <div v-if="isOpen" class="picture-overlay" @click="closePicture">
    <div class="picture-container" @click.stop>
      <button @click="closePicture" class="picture-close-button"><XIconSolid class="w-6 h-5" /></button>
      <img
        src="@/assets/pictures/YH_Picture.jpg"
        alt="Large Image"
        class="picture-image"
      />
    </div>
  </div>
</template>
  
<script>
import { XIcon as XIconSolid} from "@heroicons/vue/solid"

export default {
  name: "ProfilePicture",
  components: {
    XIconSolid
  },
  props: {
    isOpen: Boolean,
  },
  methods: {
    closePicture() {
      this.$emit("close");
    },
  },
};
</script>
  
<style scoped>
.picture-overlay {
  position: fixed;
  top: 10;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 100;
}

.picture-container {
  background-color: pink;
  padding: 10px;
  max-width: 40%;
  max-height: 60vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  z-index: 100;
}

.picture-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  z-index: 100;
}

.picture-close-button {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
  color: #333;
  z-index: 101;
}

@media (max-width: 500px) {
  .picture-container {
    max-width: 80%;
    max-height: 80%;
  }
}

@media (min-width: 768px) {
  .picture-container {
    max-width: 20%;
    max-height: 80%;
  }
}
</style>
  