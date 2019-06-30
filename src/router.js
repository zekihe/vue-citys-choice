import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const router = new VueRouter({
    base: '/',
    routes: [
        {
            path: '/',
            name: 'home',
            component: (resolve) => { require.ensure([], (require) => resolve(require("./components/home/index.vue")),'home') },
        }
    ]
})

export default router;
