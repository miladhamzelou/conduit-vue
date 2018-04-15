import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Article from '@/pages/Article'
import EditArticle from '@/pages/EditArticle'
import Profile from '@/pages/Profile'
import Setting from '@/pages/Setting'
import SignIn from '@/pages/SignIn'
import SignUp from '@/pages/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/article/:id',
      component: Article
    },
    {
      path: '/editor/',
      name: 'CreateArticle',
      component: EditArticle
    },
    {
      path: '/editor/:id',
      component: EditArticle
    },
    {
      path: '/login',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/register',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/profile/:username',
      name: 'Profile',
      component: Profile
    }
  ]
})
