<template>
  <div>
    <div 
      class="text-3xl font-bold text-gray-800 px-2 py-2 ml-4 mr-4 sm:ml-8 sm:mr-8 border-b-2 border-black mb-12"
    >
      Personal Projects
    </div>
    <div class="flex flex-wrap">
      <ProjectCards
        v-for="(project, index) in personalProjects"
        :key="index"
        :class="{
          'w-full': true,
          'sm:w-[calc(50%-3rem)]': true,
          'md:w-[calc(33.33333%-2rem)]': index % 3 === 0,
          'md:w-[calc(33.33333%-3rem)]': index % 3 === 1 || index % 3 === 2,
          'mb-12': true
        }"
        :image="project.image"
        :title="project.title"
        :text=project.text
        :code=project.code
        :video=project.video
      />
    </div>
  </div>
</template>
  
<script>
import ProjectCards from "@/components/MyProjects/ProjectCards"

export default {
  name: "ProjectsPage",
  components: {
    ProjectCards
  },
  data() {
    return {
      personalProjects: [
        { title: "Portfolio Website", 
          text: `Personal portfolio website developed with Vue.js and Tailwind CSS to showcase skills, projects, 
          and  resume. Implemented a modern and responsive design for optimal user experience.`, 
          code: "https://github.com/AlvinLim1010/portfolio", video: "",
          image: "portfolio"
        },
        { title: "Finance Recording", 
          text: `Comprehensive  Financial Bookkeeping system developed with Python for backend and Vue.js for frontend design. 
          The backend, uses FastAPI to create multiple API routes ensuring efficient communication and PostgreSQL as database.. 
          The frontend interface consists of five key pages offering users a user-friendly and visually intuitive UI.`, 
          code: "https://github.com/AlvinLim1010/Bookkeeping-frontend", video: "",          
          image: "bookkeeping"
        },
        { title: "Simple Calculator", 
          text: `A versatile calculator GUI has been developed with 'Single Operator' and 'Multiple Operator' 
          modes, complemented by a history box to display user-entered expressions.`, 
          code: "https://github.com/AlvinLim1010/CalculatorProject", video: "",
          image: "calculator"
        },
      ]
    };
  },
};
</script>
  