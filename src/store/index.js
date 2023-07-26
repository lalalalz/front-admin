import Vue from "vue";
import Vuex from "vuex";
import farm from "@/store/farm.js";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    farm
  }
});
