<template>
  <div>
    <div >
      <div 
        class="text-3xl font-bold text-gray-800 px-2 py-2 ml-8 mr-8 border-b-2 border-black mb-2"
      >
        About Me
      </div>
      <AboutMe />
    </div>
    <div>
      <div 
        class="text-3xl font-bold text-gray-800 px-2 py-2 ml-8 mr-8 border-b-2 border-black mb-2"
      >
        Work & Voluntary Timeline
      </div>
      <Timeline />
    </div>
    <div >
      <div 
        class="text-3xl font-bold text-gray-800 px-2 py-2 ml-8 mr-8 border-b-2 border-black mb-2"
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
