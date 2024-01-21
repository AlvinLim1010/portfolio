import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/styles.css';

router.beforeEach((to, from, next) => {
    const routeExists = router.options.routes.some(route => route.path === to.path);

    if (routeExists){
        if (to.path === "/home"){
            next('/')
        } else {
            next()
        }
    } else {
        next('/error404')
    }
})

document.title = `Alvin's Portfolio`
createApp(App).use(store).use(router).mount('#app')
