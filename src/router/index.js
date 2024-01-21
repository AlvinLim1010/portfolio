import { createRouter, createWebHashHistory } from 'vue-router'

// Normal Page
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Project from '../components/Projects.vue'
import Contact from '../components/Contact.vue'

// Error 404 Page
import Error404 from '../components/404.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/projects',
    name: 'Project',
    component: Project,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/error404',
    name: 'Error',
    component: Error404,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
