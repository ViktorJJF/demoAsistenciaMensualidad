import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from './views/Dashboard.vue';
import UserProfileLite from './views/UserProfileLite.vue';
import AddNewPost from './views/AddNewPost.vue';
import Errors from './views/Errors.vue';
import ComponentsOverview from './views/ComponentsOverview.vue';
import Tables from './views/Tables.vue';
import BlogPosts from './views/BlogPosts.vue';
import Members from './views/Members';
import assistControl from './views/assistControl';
import paymentControl from './views/paymentControl';
import Postulants from './views/Postulants';
import memberProfile from './components/members/memberProfile';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  },
  routes: [{
      path: '/',
      redirect: '/blog-overview',
    },
    {
      path: '/tablero-de-control',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/user-profile-lite',
      name: 'user-profile-lite',
      component: UserProfileLite,
    },
    {
      path: '/add-new-post',
      name: 'add-new-post',
      component: AddNewPost,
    },
    {
      path: '/errors',
      name: 'errors',
      component: Errors,
    },
    {
      path: '/components-overview',
      name: 'components-overview',
      component: ComponentsOverview,
    },
    {
      path: '/gestion-de-asistencia',
      name: 'assistControl',
      component: assistControl,
    },
    {
      path: '/gestion-de-pagos',
      name: 'paymentControl',
      component: paymentControl,
    },
    {
      path: '/tables',
      name: 'tables',
      component: Tables,
    }, {
      path: '/miembros',
      name: 'members',
      component: Members,
    }, {
      path: '/postulantes',
      name: 'postulants',
      component: Postulants,
    },
    {
      path: '/blog-posts',
      name: 'blog-posts',
      component: BlogPosts,
    }, {
      path: '*',
      redirect: '/errors',
    },
  ],
});