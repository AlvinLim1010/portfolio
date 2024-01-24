<template>
  <div v-if="isOpen" class="modal-overlay" @click="closeModal">
    <div class="modal-container" @click.stop>
      <button @click="closeModal" class="modal-close-button">&times;</button>
      <img
        src="@/assets/pictures/YH_Picture.jpg"
        alt="Large Image"
        class="modal-image"
      />
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "ModalPicture",
  props: {
    isOpen: Boolean,
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
  
  <style scoped>
.modal-overlay {
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

.modal-container {
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

.modal-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  z-index: 100;
}

.modal-close-button {
  position: absolute;
  top: 0px;
  right: 15px;
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
  color: #333;
  z-index: 101;
}

@media (max-width: 500px) {
  .modal-container {
    max-width: 80%;
    max-height: 80%;
  }
}

@media (min-width: 768px) {
  .modal-container {
    max-width: 20%;
    max-height: 80%;
  }
}
</style>
  