import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UEditor from '@/components/UEditor'
import test from '../view/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'UEditor',
      component: UEditor
    },

    {
      path: '/test',
      name: 'test',
      component: test
    },

  ]
})
