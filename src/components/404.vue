<template>
  <main
    class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8"
  >
    <div class="text-center">
      <h1
        class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl"
      >
        Page not found
      </h1>
      <p class="mt-6 text-base leading-7 text-gray-600">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <router-link
          v-for="(route, index) in routes"
          :key="index"
          :to="route.path"
          :class="route.class"
        >
        {{ route.path === '/' ? `` : ` ${route.label}` }}
          <span aria-hidden="true">
            {{ route.path === '/' ? '\u2190' /* Left arrow */ : '\u2192' /* Right arrow */ }}
          </span>
        {{ route.path === '/' ? `${route.label} ` : `` }}
        </router-link>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Error404Page",
  data() {
    return {
      routes: [
        { path: "/", label: "Go back home", class: "rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" },
        { path: "/contact", label: "Contact support" , class:"text-sm font-semibold text-gray-900" },
      ],
    };
  },
};
</script>

<style>
</style>