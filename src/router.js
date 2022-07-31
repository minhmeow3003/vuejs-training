import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './page/TeamsList.vue';
import UserList from './page/UsersList.vue';
import TeamMember from './components/teams/TeamMembers.vue';
import TeamFooter from './page/TeamFooter.vue';
import UserFooter from './page/UserFooter.vue';
import NotFound from './page/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/teams',
    },
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      components: {
        default: TeamsList,
        footer: TeamFooter,
      },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMember,
          props: true,
        },
      ],
    },
    {
      path: '/users',
      components: {
        default: UserList,
        footer: UserFooter,
      },
      beforeEnter(to, from, next) {
        console.log('user beforeEnter');
        console.log(to, from);
        next();
      },
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    // console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

router.beforeEach(function (to, from, next) {
  console.log('Global beforeEach');
  console.log(to, from);
  if (to.meta.needsAuth) {
    console.log('Need auth');
    next();
  } else {
    next();
  }
  // if (to.name === 'team-members') {
  //   next();
  // } else {
  //   next({ name: 'team-members', params: { teamId: 't2' } });
  // }
  next();
});

router.afterEach(function (to, from) {
  // sending analytics data
  console.log(to, from);
});

export default router;
