import Vue from 'vue'
import VueFire from 'vuefire'
import VueRouter from 'vue-router'
import App from './App.vue'
import Shedding from './components/Shedding.vue'
import Remaining from './components/Remaining.vue'
import Becoming from './components/Becoming.vue'
import Home from './components/HelloWorld.vue'
import End from './components/End.vue'
import Gallery from './components/Gallery.vue'
import FitText from './vue-fit-text/index.js';
import velocity from 'velocity-animate'
import ToggleButton from 'vue-js-toggle-button'


// import OriDomi from './oridomi.min.js'
Object.defineProperty(Vue.prototype, '$vel', { value: velocity });
// Object.defineProperty(Vue.prototype, 'OriDomi', { value: OriDomi });
/* eslint-disable no-new */
Vue.use(FitText);
Vue.use(VueFire)
Vue.use(VueRouter)
Vue.use(ToggleButton)
Vue.config.productionTip = false

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'Shedding',
    path: '/shedding',
    component: Shedding
  },
  {
    name: 'Remaining',
    path: '/remaining',
    component: Remaining
  },
  {
    name: 'Becoming',
    path: '/becoming',
    component: Becoming
  },
  {
    name: 'End',
    path: '/end',
    component: End
  },
  {
    name: 'Gallery',
    path: '/gallery',
    component: Gallery
  },
]

const router = new VueRouter({ mode: 'history', routes: routes });
new Vue({
  render: h => h(App),
  router
}).$mount('#app')

export default router