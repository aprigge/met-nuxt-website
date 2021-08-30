import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0261c60e = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _1e86f7be = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _1cd05676 = () => interopDefault(import('../pages/_slug.vue' /* webpackChunkName: "pages/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _0261c60e,
    pathToRegexpOptions: {"strict":true},
    name: "about"
  }, {
    path: "/",
    component: _1e86f7be,
    pathToRegexpOptions: {"strict":true},
    name: "index"
  }, {
    path: "/:slug",
    component: _1cd05676,
    pathToRegexpOptions: {"strict":true},
    name: "slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
