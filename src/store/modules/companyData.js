const state = {
  companyData: null
};

const getters = {
  getCompanyData(state) {
    return state.companyData;
  }
};

const mutations = {
  SAVECOMPANYDATA(state, payload) {
    state.companyData = payload;
  }
};

const actions = {
  saveCompanyData({ commit }, value) {
    commit("SAVECOMPANYDATA", value);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
