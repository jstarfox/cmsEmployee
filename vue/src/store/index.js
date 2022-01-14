//import Vue, Vuex and Axios
import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);
//Set the Base URL and Set the pages URL
const baseURL = "http://localhost:3000"
const employeesURL = `${baseURL}/employees`
const pagesURL = `${baseURL}/pages`
//Create Store module object for Page:
export default new Vuex.Store({
    strict: true,
// State object that contains array of pages
state: {
    employees:[],
    pages:[]
},
//Mutations that sets states of all the pages (Each mutation has a string type and a handler. It is like an event)
getters: {
    employeeByid: (state) => (idm) => state.employees.find((employee) => employee._id === idm),
    pagesById: (state) => (id) => state.pages.find((page) => page._id === id),
},

mutations:{
    setEmployees(state, employees){
        state.employees = employees
    },
    setPages(state, pages){
        state.pages = pages
    }
},
//Actions that gets the pages from DB and adds them to the State array. (actions commit mutations and can contain async ops)
actions: {
    async setEmployeesAction(context){
        context.commit("setEmployees", (await Axios.get(employeesURL)).data);
    },
    async addEmployee(context, employee){
        await Axios.post(employeesURL, employee);
        context.commit("setEmployees", (await Axios.get(employeesURL)).data);
    },
    async editEmployee(context, employee){
        await Axios.put(`${employeesURL}/${employee._id}`, employee);
        context.commit("setEmployees", (await Axios.get(employeesURL)).data);
    },
    async deleteEmployee(context,employee) {
        await Axios.delete(`${employeesURL}/${employee._id}`, employee);
        context.commit("setEmployees", (await Axios.get(employeesURL)).data);
        //console.log(employees);
    },
        async setPagesAction(context){
            context.commit("setPages", (await Axios.get(pagesURL)).data);
        },
        async addPage(context, page){
            await Axios.post(pagesURL, page);
            context.commit("setPages", (await Axios.get(pagesURL)).data);
        },
        async editPage(context, page){
            await Axios.put(`${pagesURL}/${page._id}`, page);
            context.commit("setPages", (await Axios.get(pagesURL)).data);
        },
        async deletePage(context,page) {
            await Axios.delete(`${pagesURL}/${page._id}`, page);
            context.commit("setPages", (await Axios.get(pagesURL)).data);
            //console.log(pages);
        }
}});
