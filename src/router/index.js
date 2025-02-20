import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AppointmentPac from "@/views/AppointmentPac.vue"
import ExamsPac from "@/views/ExamsPac.vue"
import LoginView from "@/views/LoginView.vue"
import RegisterView from "@/views/RegisterView.vue"
import ForgotPassView from "@/views/ForgotPassView.vue"

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
    },
    {
        path: "/login",
        name: "login",
        component: LoginView,
    },
    {
        path: "/cadastro",
        name: "cadastro",
        component: RegisterView,
    },
    {
        path: "/esqueceu-senha",
        name: "esqueceu-senha",
        component: ForgotPassView,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
