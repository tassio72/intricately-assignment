import Vue from "vue";
import vueRouter from "vue-router";
// components
import AppHome from "./components/Home.vue";
import AppCompanyData from "./components/company/CompanyData.vue";
import AppCompanyPage from "./components/company/CompanyPage.vue";
import AppCompanyTable from "./components/company/CompanyTable.vue";

Vue.use(vueRouter);

export default new vueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: AppHome
    },

    {
      path: "/company/data",
      name: "CompanyData",
      component: AppCompanyData
    },
    {
      path: "/company/page",
      name: "CompanyPage",
      component: AppCompanyPage
    },
    {
      path: "/company/table",
      name: "CompanyTable",
      component: AppCompanyTable
    }
  ]
});
