<template>
  <div>
    <div >
      <div 
        class="text-3xl font-bold text-gray-800 px-2 py-2 ml-4 mr-4 sm:ml-8 sm:mr-8 border-b-2 border-black mb-2"
      >
        About Me
      </div>
      <div class="flex flex-col sm:flex-row">
        <div class="ml-4 w-full sm:w-3/5 sm:ml-8">
          <AboutMe />
        </div>

        <div class="w-full sm:w-2/5 p-10">
          <div class="bg-white p-4 rounded shadow-md mb-4 sm:mr-8 ">
            ThreeJS Hello Animation
          </div>
        </div>
      </div>
    </div>
    <div>
      <div 
        class="text-3xl font-bold text-gray-800 px-2 py-2 ml-4 mr-4 sm:ml-8 sm:mr-8 border-b-2 border-black mb-2"
      >
        Work & Voluntary Timeline
      </div>
      <Timeline />
    </div>
    <div >
      <div 
        class="text-3xl font-bold text-gray-800 px-2 py-2 ml-4 mr-4 sm:ml-8 sm:mr-8 border-b-2 border-black mb-2"
      >
        Testimonials
      </div>
      <Testimonials />
    </div>
  </div>
</template>

<script>
import Timeline from "@/components/AboutMe/Timeline"
import Testimonials from "@/components/AboutMe/Testimonials"
import AboutMe from "@/components/AboutMe/AboutMe"

export default {
  name: 'AboutPage',
  components: {
    AboutMe,
    Timeline,
    Testimonials,
  }
}
</script>
