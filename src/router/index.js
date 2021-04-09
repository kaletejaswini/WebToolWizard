import Vue from 'vue'
import Router from 'vue-router'
import WebTool from '@/views/Web-Tool/web-tool';
import Full from '@/container/Full'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: Full,
      redirect: '/agiliron/Web-Tool',
      children: [
        {
          path: '/agiliron/Web-Tool',
          component: WebTool,
        }
      ]
    }
  ]
})
