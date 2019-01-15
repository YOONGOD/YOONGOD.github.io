import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/index'
// import MyPlayer from '@/components/myPlayer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
