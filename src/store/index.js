import Vue from "vue";
import Vuex from "vuex";
import Farm from "@/api/farm";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tableData: [],
    columns: [],
    sortConfig: {},
  },
  getters: {
    getColumns(state, getters, rootState) {
      return state.columns;
    },
    getTableData(state, getters, rootState) {
      return state.tableData;
    },
    getSortConfig(state, getters, rootState) {
      return state.sortConfig;
    }
  },
  mutations: {
    setColumns(state, columns) {
      state.columns = columns;
    },
    setTableData(state, data) {
      state.tableData = data;
    },
    setSortConfig(state, config) {
      state.config = config;
    }
  },
  actions: {
    async initTable(context, value) {
      let {columns, tableData} = await Farm.getFarms();

      context.commit("setColumns", columns);
      context.commit("setTableData", tableData);
      context.commit("setSortConfig", {prop: "farmId"});
    },
  }
});
