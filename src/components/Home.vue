<template>
  <div class="flex-row sm:flex-row">
    <div class="flex flex-col sm:flex-row">
      <div class="w-full sm:w-3/5 p-10 mt-10">
        <div class="p-4 flex flex-col items-center justify-center">
          <div class="gradient-text">
            Hello, I'm Alvin
          </div>
          <div class="mt-5 text-3xl font-bold tracking-wide">
            <div class="text-gray-900 inline">
              I am into 
            </div>
            <div class="text-red-400 inline">
              <span ref="typewriter"></span>
            </div>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row mt-10 h-1/6 items-center justify-center">
          <button 
            type="submit" 
            class="w-1/2 h-full md:w-1/4 rounded-full border border-4 border-indigo-600 bg-transparent sm:text-sm text-xl font-semibold 
            text-indigo-600 button-border-hover hover:border-indigo-400
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            @click.prevent="downloadResume"
          >
            <span class="flex items-center justify-center">
              <span>Download CV</span>
              <DownloadIconSolid class="w-6 h-5" />
            </span>
          </button>

          <div class="w-full sm:w-3/5 text-sm text-gray-700 sm:ml-5 ml-2">
            Please browse through the website to learn more about me using the Navigation Bar.
          </div>
        </div>
      </div>

      <div class="w-full sm:w-2/5 p-10" style="height: calc(100vh - 380px);">
        <!-- <div class="p-4 h-full">
          ThreeJS Photo Animation
        </div> -->
      </div>
    </div>

    <div class="flex sm:flex-row">
      <AwardsInfo />
    </div>
  </div>
</template>

<script>
import Typed from 'typed.js';
import { DownloadIcon as DownloadIconSolid} from '@heroicons/vue/solid';

import AwardsInfo from '@/components/HomePage/AwardsInfo.vue'


export default {
  name: "HomePage",
  components: {
    DownloadIconSolid,
    AwardsInfo
  },
  mounted() {
    this.initTyped();
  },
  beforeUnmount(){
    this.destroyTyped()
  },
  data() {
    return {
      jobRoles: [
        "Software Engineer!",
        "AI Developer!",
        "Full-Stack Developer!",
        "Machine Learning Engineer!"
      ]
    };
  },
  methods: {
    initTyped() {
      const options = {
        strings: this.jobRoles,
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1000,
        loop: true,
      };

      new Typed(this.$refs.typewriter, options);
    },
    destroyTyped() {
      if (this.typed) {
        this.typed.destroy();
      }
    },
    downloadResume(){
      const pdfPath = require('@/assets/YH_Resume.pdf');
      console.log(pdfPath)

      const link = document.createElement('a');
      link.href = pdfPath.default;
      link.download = 'downloaded_resume.pdf';

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
    },
  },
};
</script>

<style scoped>
.gradient-text {
  font-size: 4rem;
  font-weight: bold;
  display: inline-block;
  background: linear-gradient(45deg, #ff8a00, #e52e71);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  background-size: 200% 100%;
  animation: changeColors 2s infinite linear;
}

@keyframes changeColors {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

.button-border-hover:hover {
  animation: borderGradient 3s infinite linear;
}

@keyframes borderGradient {
  0%, 100% {
    box-shadow: 0 0 0 6px #4285F4, 0 0 0 6px #2962FF;
  }
  25% {
    box-shadow: 0 0 0 6px #2962FF, 0 0 0 6px #004080;
  }
  50% {
    box-shadow: 0 0 0 6px #004080, 0 0 0 6px #4285F4;
  }
  75% {
    box-shadow: 0 0 0 6px #4285F4, 0 0 0 6px #2962FF;
  }
}
</style>
