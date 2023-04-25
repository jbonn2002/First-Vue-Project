import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue"
import About from "../views/about.vue"
import Skills from "../views/skills.vue"
import Projects from "../views/projects.vue"
import Contact from "../views/contact.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Main",
            component: Home
        },
        {
            path: "/about",
            name: "About",
            component: About,
        },
        {
            path: "/skills&traits",
            name: "Skills&Traits",
            component: Skills,
        },
        {
            path: "/projects",
            name: "Projects",
            component: Projects,
        },
        {
            path: "/contact",
            name: "Contact",
            component: Contact,
        },
    ]
})

export default router