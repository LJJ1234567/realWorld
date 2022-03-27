import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _06c812f0 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _06ed4625 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _5218723a = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _7b772aba = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _1788fa69 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _0a0d8d9a = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _ade2a420 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _06c812f0,
    children: [{
      path: "",
      component: _06ed4625,
      name: "home"
    }, {
      path: "/login",
      component: _5218723a,
      name: "login"
    }, {
      path: "/register",
      component: _5218723a,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _7b772aba,
      name: "profile"
    }, {
      path: "/settings",
      component: _1788fa69,
      name: "settings"
    }, {
      path: "/editor",
      component: _0a0d8d9a,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _ade2a420,
      name: "article"
    }]
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
