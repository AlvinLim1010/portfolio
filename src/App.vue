<template>
  <div>
    <NavBar />
    <router-view class="gradient-bg py-4" />
    <Footer class="sticky bottom-0 z-40" />
  </div>
</template>

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

<style scoped>
.gradient-bg {
  background: linear-gradient(to bottom, #B0BEC5, #78909C);
}
</style>
