<template>
  <div class="bg-white p-4 rounded shadow-md">
    <form @submit.prevent="submitForm">
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-2xl font-bold leading-7 text-gray-900">
            GET IN TOUCH!
          </h2>
          <p class="mt-2 text-sm leading-6 text-gray-600">
            Connect with me for job opportunities, collaborations, or any
            inquiries. I look forward to hearing from you!
          </p>

          <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label
                for="first-name"
                class="text-sm font-medium leading-6 text-gray-900"
                >First name</label
              >
              <div class="mt-2">
                <input
                  v-model="firstName"
                  type="text"
                  id="first-name"
                  name="first-name"
                  autocomplete="given-name"
                  class="w-full rounded-md py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 form-padding"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label
                for="last-name"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Last name</label
              >
              <div class="mt-2">
                <input
                  v-model="lastName"
                  type="text"
                  id="last-name"
                  name="last-name"
                  autocomplete="family-name"
                  class="w-full rounded-md py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 form-padding"
                />
              </div>
            </div>

            <div class="sm:col-span-full">
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Email address</label
              >
              <div class="mt-2">
                <input
                  v-model="email"
                  id="email"
                  type="email"
                  name="email"
                  autocomplete="email"
                  class="w-full rounded-md py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 form-padding"
                />
              </div>
            </div>

            <div class="col-span-full">
              <label
                for="message"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Message</label
              >
              <div class="mt-2">
                <textarea
                  v-model="message"
                  placeholder="Type your message here"
                  id="message"
                  name="message"
                  rows="4"
                  class="w-full rounded-md py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 form-padding"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-3 flex items-center justify-end gap-x-5">
        <button
          @click="cancelForm"
          type="button"
          class="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Send
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    };
  },
  methods: {
    submitForm() {
      console.log("Form submitted:", this.firstName, this.lastName, this.email, this.message);
    },
    cancelForm() {
      this.firstName = ""
      this.lastName = ""
      this.email = ""
      this.message = ""
    },
  },
};
</script>

<style scoped>
.form-padding {
  padding-left: 0.75rem; 
  padding-right: 0.75rem;
}
</style>