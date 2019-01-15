// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'video.js/dist/video-js.css'
import 'videojs-flash'
import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
Vue.config.productionTip = false
// VideoPlayer.config({
//   youtube: true,
//   switcher: true,
//   hls: true
// })
Vue.use(VideoPlayer)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
