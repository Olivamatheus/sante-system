import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AppointmentPac from "@/views/AppointmentPac.vue"

const routes = [
    {
        path: "/",
        component: HomeView,
    },
    {
        path: "/consultas",
        name: "consultas",
        component: AppointmentPac,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
