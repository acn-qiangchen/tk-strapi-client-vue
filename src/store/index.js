import { createStore } from 'vuex';
import dummyData from './DummyData';

export default createStore({
  state: {
    items: [], // Initialize with an empty array
  },
  mutations: {
    setItems(state, items) {
      state.items = items;
    },
  },
  actions: {
    async fetchData({ commit }) {
      // Simulate fetching data (replace with actual API call)
      // Populate state.items with the fetched data
      commit('setItems', dummyData);
    },
  },
});