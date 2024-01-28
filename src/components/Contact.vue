<template>
  <div class="flex flex-col sm:flex-row">
    <div class="w-full sm:w-3/5 p-10">
      <ContactForm />
    </div>

    <div class="w-full sm:w-2/5 p-10">
      <div class="bg-white p-4 rounded shadow-md mb-4" style="height: calc(70vh - 205px);">
        ThreeJS Dog Animation 1
      </div>
      <div class="p-4" style="height: 20vh;">
        <ContactInfo />
      </div>
    </div>
  </div>
</template>
  
<script>
import ContactInfo from '@/components/ContactMe/ContactInfo.vue'
import ContactForm from '@/components/ContactMe/ContactForm.vue'

export default {
  name: "ContactPage",
  components: {
    ContactInfo,
    ContactForm
  },
};
</script>
