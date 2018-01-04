import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes';
import store from '~/store'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta, {
  keyName: 'metaInfo', // the component option name that vue-meta looks for meta info on.
  attribute: 'data-vm', // the attribute name vue-meta adds to the tags it observes
  ssrAttribute: 'data-vue-meta-server-rendered', // the attribute name that lets vue-meta know that meta info has already been server-rendered
  tagIDKeyName: 'vmid' // the property name that vue-meta uses to determine whether to overwrite or append a tag
})


export default new Router({
  mode: 'history',
  base: '/',
  scrollBehavior: (to, from, savedPosition) => {
    return !savedPosition ? { x: 0, y: 0 } : savedPosition;
  },
  routes,
  beforeEach: (to, from, next) => {
    next();
  },
  afterEach: (to, from, next) => {
  }
})
