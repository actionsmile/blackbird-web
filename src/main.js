// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Wallpaper from './components/Wallpaper'
import App from './components/App'
import Logo from './components/Logo'
import AppFooter from './components/AppFooter'
import router from './router'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<wallpaper><app><logo/><router-view/><app-footer/></app></wallpaper>',
  components: {
    Wallpaper,
    App,
    Logo,
    AppFooter
  }
})
