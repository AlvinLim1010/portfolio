<template>
  <div>
    <div class="relative group h-96 overflow-hidden bg-black">
      <img
        class="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
        :src="getImagePath(imagePath)"
      />
      <div
        class="absolute h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"
      ></div>
      <div
        class="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0"
      >
        <div class="absolute w-full flex place-content-center">
          <p
            class="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10"
          >
            {{ title }}
          </p>
        </div>
        <div class="absolute w-full flex place-content-center mt-20">
          <p class="font-sans text-center w-4/5 text-white mt-5">
            {{ text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
export default {
  name: "CardSlideUp",
  props: {
    imagePath: String,
    title: String,
    text: String,
  },
  methods: {
    getImagePath(imagePath) {
      return require(`@/assets/pictures/${imagePath}.png`);
    },
  }
};
</script>
    