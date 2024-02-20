<template>
  <div
    class="flex flex-col sm:flex-row rounded shadow-2xl w-full p-12 mx-20 mb-2 border border-gray-600 border-2"
  >
    <div
      v-for="(info, index) in awardInfo"
      :key="index"
      class="sm:w-1/4 text-center"
    >
      <p class="text-5xl mb-3 font-bold">{{ info.result }}</p>
      <span class="text-sm text-gray-200 font-semibold">{{ info.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AwardInfo",
  data() {
    return {
      awardInfo: [
        { title: "EXPERIENCES (YRS)", result: "0.5" },
        { title: "AWARDS", result: "2" },
        { title: "PROJECTS", result: "10+" },
        { title: "USERS", result: "~10" },
      ],
    };
  },
};
</script>

<style></style>