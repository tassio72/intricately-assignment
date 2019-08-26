import Vue from "vue";
import Vuex from "vuex";

const requireModule = require.context("./modules", false, /\.js$/);
const modules = {};

requireModule.keys().forEach(filename => {
  if (filename === "/store.js") return;

  let moduleName = filename.replace(/(\.\/|\.js)/g, "");

  modules[moduleName] = {
    namespaced: true,
    ...requireModule(filename).default
  };
});

Vue.use(Vuex);

export default new Vuex.Store({
  modules
});
