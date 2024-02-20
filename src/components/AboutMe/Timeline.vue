<template>
  <div class="min-h-screen">
    <div class="min-h-screen flex justify-center">
      <div class="w-2/3 mx-auto">
        <div 
          v-for="(timeline, index) in timelineInfo"
          :key="index"
          class="flex flex-row w-full"
        >
          <!-- Left Card -->
          <div class="w-0 hidden px-2 py-10 left-card-transition sm:w-2/5 sm:block">
            <div
              class="flex flex-col w-full rounded-lg shadow bg-white px-3 py-5"
              v-if="index % 2 === 0"
            >
              <div class="text-gray-800 flex justify-between text-xl font-bold">
                {{ timeline.role }}
              </div>
              <div class="text-gray-600 flex justify-between text-sm font-semibold border-b-2 border-black">
                {{ timeline.place }}
              </div>
              <div class="text-gray-500">
                {{ timeline.text }}
              </div>
            </div>
          </div>

          <!-- Line -->
          <div class="w-1/5 flex justify-center">
            <div
              class="relative flex h-full w-1 bg-green-300 items-center justify-center"
            >
              <div
                class="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 
                border-green-300 leading-none text-center z-10 bg-white font-thin"
              >
                <div>{{ timeline.date }}</div>
              </div>
            </div>
          </div>
          
          <!-- Right Card -->
          <div class="w-0 hidden px-2 py-10 right-card-transition sm:w-2/5 sm:block">
            <div
              class="flex flex-col w-full rounded-lg shadow bg-white px-3 py-5"
              v-if="index % 2 !== 0"
            >
              <div class="text-gray-800 flex justify-between text-xl font-bold">
                {{ timeline.role }}
              </div>
              <div class="text-gray-600 flex justify-between text-sm font-semibold border-b-2 border-black">
                {{ timeline.place }}
              </div>
              <div class="text-gray-500">
                {{ timeline.text }}
              </div>
            </div>
          </div>

          <!-- Always Right Card -->
          <div class="w-4/5 px-4 py-10 right-card-transition sm:hidden">
            <div
              class="flex flex-col w-full rounded-lg shadow bg-white px-3 py-5"
            >
              <div class="text-gray-800 flex justify-between text-xl font-bold">
                {{ timeline.role }}
              </div>
              <div class="text-gray-600 flex justify-between text-sm font-semibold border-b-2 border-black">
                {{ timeline.place }}
              </div>
              <div class="text-gray-500">
                {{ timeline.text }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperienceTimeline',
  mounted() {
    const leftObserver = new IntersectionObserver(this.handleIntersection, {
      threshold: 0.15,
      rootMargin: '-170px 0px -170px 0px'
    });

    const rightObserver = new IntersectionObserver(this.handleIntersection, {
      threshold: 0.15,
      rootMargin: '-170px 0px -170px 0px'
    });

    document.querySelectorAll('.left-card-transition').forEach(leftCard => {
      leftObserver.observe(leftCard);
    });

    document.querySelectorAll('.right-card-transition').forEach(rightCard => {
      rightObserver.observe(rightCard);
    });
  },
  data() {
    return {
      timelineInfo: [
        { 
          date: "Sept 2023 - Present", role: "Software Engineer", place: "Pingspace", 
          text: 
          `Working on backend using Flask-RESTX and OAuth2 authentication. Developed OAuth2-based login, chat box 
          feature, and visualizations for real-time insights into robotic fleet movements for the UI. Contributes 
          to the team by implementing intelligent job assignment, optimizing task allocation while ensuring the 
          robots does not collide for enhanced robotic efficiency.`
        },
        { 
          date: "March 2022", role: "Shopee Code League (Competitions)", place: "Remote Online", 
          text: 
          `Teamed up with two others for a high-intensity coding challenge in the Shopee Code League, showcasing 
          our problem-solving skills and reinforcing my passion for using technology to address real-world challenges.` 
        },
        { 
          date: "Sept 2021", role: "AI Hackathon (Competitions)", place: "Remote Online", 
          text: 
          `Participated a distinctive AI Hackathon, centered on Multiple Choice Questions (MCQs), with a team of four. 
          The event offered a valuable opportunity to test and enhance our theoretical understanding of AI, reinforcing 
          my dedication to continuous learning in this dynamic field.`
        },
        { 
          date: "Sept 2020 - Jun 2021", role: "Vice President (Archery Club)", place: "University of Nottingham Malaysia",
          text: 
          `Led and organized events, fostering a thriving community for archery enthusiasts. Played a key role in skill 
          development programs, contributing to the overall success of the club. This experience sharpened my leadership 
          and organizational skills, reinforcing my commitment to fostering inclusive communities united by shared passions.`
        },
        { 
          date: "Feb 2017 - April 2019", role: "House Captain", place: "Crescendo HELP International School", 
          text: 
          `Led and organized events, fostering unity and a positive atmosphere within our house. Strengthened my leadership 
          through a focus on collaboration and teamwork. Played a crucial role in coordinating diverse initiatives, 
          contributing significantly to our house's success and leaving a positive impact on the wider school community.`
        },
      ],
    };
  },
  methods: {
    handleIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          entry.target.classList.remove('is-leaving');
        } else {
          entry.target.classList.remove('is-visible');
          entry.target.classList.add('is-leaving');
        }
      });
    },
  }
};
</script>

<style scoped>
.left-card-transition {
  opacity: 0;
  transform: translateX(-50px);
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.left-card-transition.is-visible {
  opacity: 1;
  transform: translateX(0);
}

.left-card-transition.is-leaving {
  opacity: 0;
  transform: translateX(-50px);
}

.right-card-transition {
  opacity: 0;
  transform: translateX(50px); 
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.right-card-transition.is-visible {
  opacity: 1;
  transform: translateX(0);
}

.right-card-transition.is-leaving {
  opacity: 0;
  transform: translateX(50px);
}
</style>

