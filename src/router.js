import { createRouter, createWebHistory } from 'vue-router'
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import ProjectDetails from "./components/projects/ProjectDetails.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/home',
            name: 'AllProjects',
            children: [
                {
                    name: 'Home',
                    path: '',
                    component: Home
                },
                {
                    path: 'details/:id',
                    name: 'ProjectDetails',
                    component: ProjectDetails,
                }
            ]
        },
        {
            path: '/about',
            name: 'About',
            component: About
        }
    ]
})

export default router