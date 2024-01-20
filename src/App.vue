<template>
  <div>
    <NavBar />
    <router-view></router-view>
    <Footer />
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
