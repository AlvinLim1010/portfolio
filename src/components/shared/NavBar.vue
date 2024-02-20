<template>
  <div class="sticky top-0 z-50">
  <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button type="button"
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            @click="toggleMobileMenu"
          >
            <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        
        <!-- Picture Logo -->
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <a @click="openProfilePicture">
            <img class="h-10 w-10 rounded-full object-cover" src="@/assets/pictures/YH_Picture.jpg"
              alt="My Picture">
          </a>
        </div>

        <!-- Routing Buttons -->
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
          <div class="hidden sm:ml-6 sm:block ml-auto">
            <div class="flex space-x-4">
              <router-link
                v-for="(route, index) in routes"
                :key="index"
                :to="route.path"
                :class="buttonStyle(route.path)"
                :aria-current="isCurrentRoute(route.path)"
              >
                {{ route.label }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" v-show="isMobileMenuOpen">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <router-link
          v-for="(route, index) in routes"
          :key="index"
          :to="route.path"
          :class="buttonStyle(route.path)"
          :aria-current="isCurrentRoute(route.path)"
        >
          {{ route.label }}
        </router-link>
      </div>
    </div>
  </nav>
    <ProfilePicture 
      :isOpen="isProfilePictureOpen" 
      @close="closeProfilePicture" 
    />
  </div>

</template>
  
<script>
import ProfilePicture from './ProfilePicture.vue';

export default {
  name: "NavBar",
  components: {
    ProfilePicture,
  },
  data() {
    return {
      isProfilePictureOpen: false,
      isMobileMenuOpen: false,
      routes: [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Me' },
        { path: '/projects', label: 'Projects' },
        { path: '/contact', label: 'Contact Me' },
      ],
    };
  },
  methods: {
    openProfilePicture() {
      this.isProfilePictureOpen = true;
    },
    closeProfilePicture() {
      this.isProfilePictureOpen = false;
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    isCurrentRoute(route) {
      return this.$route.path === route ? 'page' : null;
    },
    buttonStyle(route) {
      return this.$route.path === route ? 
        "bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" : 
        "text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium";
    },
  },
};
</script>
