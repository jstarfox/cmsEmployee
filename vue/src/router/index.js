//import Vue, Vuex and Axios
import Vue from "vue";
import VueRouter from "vue-router";
import Employees from "../components/Employees";
import Admin from "../components/admin/Admin";
import Pages from "../components/Pages";

import AdminEmployees from "../components/admin/Employees";
import AdminPages from "../components/admin/Pages";
import EmployeeEditor from "../components/admin/EmployeeEditor";
import PageEditor from "../components/admin/PageEditor";

//Load the router to the app.
Vue.use(VueRouter)

//Create and export the vueRouter by defining mode and routes array.
export default new VueRouter({
    mode: "history",


//State object that contains array of pages
routes: [
    {path: "/admin", 
    component: Admin, 
    children: [
        {path: "employees", component: AdminEmployees},
        {path: "employees/:op(add|edit)/:idm?", component: EmployeeEditor}
    ]},
    {path: "/:slug", component: Employees},
    {path: "*", redirect: "/home"},

    { path: "/admin",
        component: Admin,
        children: [
           { path: "pages", component: AdminPages },
           { path: "pages/:op(add|edit)/:id?", component: PageEditor }

        ]
        },
        { path: "/:slug", component: Pages},
        { path: "*", redirect: "/home"}
    
]
});