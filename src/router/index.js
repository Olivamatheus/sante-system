import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AppointmentPac from "@/views/AppointmentPac.vue"
import ExamsPac from "@/views/ExamsPac.vue"

const routes = [
    {
        path: "/",
        component: HomeView,
    },
    {
        path: "/consultas",
        name: "consultas",
        component: AppointmentPac,
    },
    {
        path: "/exames",
        name: "exames",
        component: ExamsPac,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
