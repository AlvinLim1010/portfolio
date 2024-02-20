<template>
  <div class="tracking-wide text-gray-900">
    <div>
      <MailIcon class="w-16 inline" />
      <div class="text-xl font-bold inline">Email: </div>
      <div class="text-m font-semibold inline">
        <a
          :href="emailLink"
          class="text-indigo-600 hover:underline focus:underline focus:outline-indigo-600"
        >
           {{ myEmail }}
        </a>
      </div>
    </div>

    <div>
      <PhoneIcon class="w-16 inline" />
      <div class="text-xl font-bold inline">Phone(MY): </div>
      <div class="text-md font-semibold inline">
        {{ myPhone }}
      </div>
    </div>
  </div>
</template>

<script>
import { MailIcon, PhoneIcon } from "@heroicons/vue/solid"

export default {
  name: "ContactInfo",
  components: {
    MailIcon,
    PhoneIcon
  },
  computed: {
    emailLink() {
      return `mailto:${this.myEmail}`;
    },
  },
  data() {
    return {
      myEmail: "hong3842@gmail.com",
      myPhone: "+6011-1090 0031",
    }
  }
};
</script>
