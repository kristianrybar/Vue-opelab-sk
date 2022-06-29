import { createRouter, createWebHistory } from "vue-router";
import AHome from '../views/a-home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: AHome,
    },
]

const router = createRouter(
    {
    history: createWebHistory(),
    routes
    }
)

export default router