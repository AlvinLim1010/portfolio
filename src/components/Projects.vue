<template>
  <div>
    <div >
      <div 
        class="text-3xl font-bold text-gray-800 px-2 py-2 ml-4 mr-4 sm:ml-8 sm:mr-8 border-b-2 border-black mb-2"
      >
        Personal Projects
      </div>
      <div class="flex flex-wrap">
        <ProjectCards class="w-full sm:w-[calc(50%-3rem)] md:w-[calc(33.33333%-2rem)] lg:max-w-[calc(25%-2rem)] mb-4"/>
        <ProjectCards class="w-full sm:w-[calc(50%-3rem)] md:w-[calc(33.33333%-3rem)] lg:max-w-[calc(25%-3rem)] mb-4"/>
        <ProjectCards class="w-full sm:w-[calc(50%-3rem)] md:w-[calc(33.33333%-3rem)] lg:max-w-[calc(25%-3rem)] mb-4"/>
        <ProjectCards class="w-full sm:w-[calc(50%-3rem)] md:w-[calc(33.33333%-2rem)] lg:max-w-[calc(25%-2rem)] mb-4"/>
        <ProjectCards class="w-full sm:w-[calc(50%-3rem)] md:w-[calc(33.33333%-3rem)] lg:max-w-[calc(25%-2rem)] mb-4"/>
        <ProjectCards class="w-full sm:w-[calc(50%-3rem)] md:w-[calc(33.33333%-3rem)] lg:max-w-[calc(25%-3rem)] mb-4"/>
        <ProjectCards class="w-full sm:w-[calc(50%-3rem)] md:w-[calc(33.33333%-2rem)] lg:max-w-[calc(25%-3rem)] mb-4"/>
        <ProjectCards class="w-full sm:w-[calc(50%-3rem)] md:w-[calc(33.33333%-3rem)] lg:max-w-[calc(25%-2rem)] mb-4"/>
      </div>


      <!-- <div class="flex flex-col sm:flex-row">
        <ProjectCards class="ml-8"/>
        <ProjectCards class="mx-8"/>
        <ProjectCards class="mr-8"/>
      </div> -->
    </div>
    <div>
      <div 
        class="text-3xl font-bold text-gray-800 px-2 py-2 ml-4 mr-4 sm:ml-8 sm:mr-8 border-b-2 border-black mb-2"
      >
        School Projects
      </div>
    </div>
  </div>
</template>
  
<script>
import ProjectCards from "@/components/MyProjects/ProjectCards"

export default {
  name: "ProjectsPage",
  components: {
    ProjectCards
  }
};
</script>
  