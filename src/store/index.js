import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import moduleMeta from './modules/meta';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    meta: moduleMeta
  },
});