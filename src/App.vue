<script>
import Home from './components/Home.vue'
import Test from './components/Test.vue'

const routes = {
  '/': Home,
  '/test': Test,
}

export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
		  this.currentPath = window.location.hash
		})
  }
}
</script>

<template>
  <a href="#/">Home</a>
  <a href="#/test">Test</a>
  <component :is="currentView" />
</template>