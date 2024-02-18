<template>
  <div>
    <div class="relative group h-96 overflow-hidden bg-black">
      <img
        class="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1650&q=80"
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
            Team work
          </p>
        </div>
        <div class="absolute w-full flex place-content-center mt-20">
          <p class="font-sans text-center w-4/5 text-white mt-5">
            Collaborative effort of a group to achieve a common goal the most
            effective and efficient way!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
export default {
  name: "CardSlideUp",
};
</script>
    