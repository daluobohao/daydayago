import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StoriesView from '../views/StoriesView.vue'
import StoryView from '../views/StoryView.vue'
import JokesView from '../views/JokesView.vue'
import AboutView from '../views/AboutView.vue'
import PrivacyView from '../views/PrivacyView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { title: '首页' } },
    {
      path: '/stories',
      name: 'stories',
      component: StoriesView,
      meta: { title: '童话' },
    },
    {
      path: '/stories/:slug',
      name: 'story',
      component: StoryView,
      meta: { title: '童话' },
    },
    { path: '/jokes', name: 'jokes', component: JokesView, meta: { title: '笑话' } },
    { path: '/about', name: 'about', component: AboutView, meta: { title: '关于' } },
    { path: '/privacy', name: 'privacy', component: PrivacyView, meta: { title: '隐私政策' } },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView, meta: { title: '没找到' } },
  ],
})

router.afterEach((to) => {
  const base = '萝卜天空'
  document.title = to.meta.title ? `${to.meta.title} · ${base}` : base
})

export default router
