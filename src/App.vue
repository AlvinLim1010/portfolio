<template>
  <div>
    <NavBar class="sticky top-0 z-50" />
    <router-view class="gradient-bg" />
    <Footer class="sticky bottom-0 z-50" />
  </div>
</template>

<style scoped>
.gradient-bg {
  background: linear-gradient(to bottom, #B39DDB, #6F42C1); /* Adjust the color values as needed */
}
</style>

<script>
import NavBar from '@/components/shared/NavBar';
import Footer from '@/components/shared/Footer';

export default {
  components: {
    NavBar,
    Footer
  }
}
</script>
