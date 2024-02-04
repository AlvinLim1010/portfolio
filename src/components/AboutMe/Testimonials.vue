<template>
  <div class="relative w-1/2 mx-auto overflow-hidden">
    <div
      class="flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(testimonial, index) in testimonials"
        :key="index"
        class="flex-none w-full border border-solid border-gray-300 rounded-lg overflow-hidden shadow-md"
      >
        <div
          class="flex flex-col w-full rounded-lg shadow bg-white px-10 py-5"
        >
          <div class="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-6">
            <div class="lg:col-span-1 ml-5">
              <div v-if="testimonial.image" class="text-gray-800 flex justify-between text-xl font-bold">
                {{ testimonial.image }}
              </div>
              <div v-else class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
                <svg 
                  class="absolute w-12 h-12 text-gray-400 -left-1" 
                  fill="currentColor" 
                  viewBox="0 0 20 20" 
                >
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
              
            <div class="lg:col-span-5">
              <div class="text-gray-800 flex justify-between text-xl font-bold">
                {{ testimonial.author }}
              </div>
              <div class="text-gray-600 flex justify-between text-sm font-semibold">
                {{ testimonial.place }}
              </div>
            </div>
          </div>

          <div class="text-gray-600 flex justify-between text-sm font-semibold mt-2">
            {{ testimonial.text }}
          </div>
        </div>
      </div>

      <div v-if="testimonials.length === 0">
        <div
          class="flex flex-col w-full rounded-lg shadow bg-white px-10 py-5"
        >
          <div class="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-6">
            <div class="text-gray-600 flex justify-between text-sm font-semibold mt-2">
              No Testimonials
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center mt-3">
      <span
        v-for="(testimonial, index) in testimonials"
        :key="index"
        :class="{ 'w-4 h-4 mx-1 bg-gray-300 rounded-full cursor-pointer': true, 'bg-gray-700': index === currentIndex }"
        @click="goToSlide(index)"
      ></span>
    </div>

    <button 
      @click="prevSlide"
      class="absolute top-1/4 left-1" 
    >
      <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-500 hover:bg-gray-400">
        <svg class="w-3 h-3 text-white" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button 
      @click="nextSlide" 
      class="absolute top-1/4 right-1" 
    >
      <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-500 hover:bg-gray-400">
        <svg class="w-3 h-3 text-white" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: "TestimonialCarousel",
  data() {
    return {
      currentIndex: 0,
      testimonials: [
        // { image: "", text: "Testimonial 1", author: "Author 1", place: "Author 1" },
      ],
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
  },
};
</script>
