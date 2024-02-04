<template>
  <div class="w-full sm:w-2/4">
    <h3 class="text-lg font-bold mb-1">
      <span class="border-b-2 border-black">{{ sectionTitle }}</span>
    </h3>
    <ul class="list-disc pl-4 mb-2">
      <li v-for="(item, index) in skills" :key="index" class="text-md">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
  
  <script>
export default {
  props: {
    sectionTitle: String,
    skills: Array,
  },
};
</script>
  