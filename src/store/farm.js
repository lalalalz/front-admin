import getFarms from "@/api/farm";

const farm = {
  namespace: true,
  state: {
    columns: [],
    data: [],
    formData: {
      farmId: "",
      memberId: "",
      address: "",
      description: ""
    }
  },
  getters: {
    getColumns(state, getters, rootState) {
      return state.columns;
    },
    getData(state, getters, rootState) {
      return state.data;
    },
  },
  mutations: {
    setColumns(state, columns) {
      state.columns = columns;
    },
    setData(state, data) {
      state.data = data;
    },
    setFormData(state, formData) {
      state.formData = formData;
    },
  },
  actions: {
    async init(context, value) {
      let farmData = await getFarms();
      console.log("farmData : {}", farmData);

      context.commit("setColumns", farmData.columns);
      context.commit("setData", farmData.data);
    },
  }
}

export default farm;
