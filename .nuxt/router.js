import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _788c6ab9 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _39ce6ba6 = () => interopDefault(import('..\\pages\\blog.vue' /* webpackChunkName: "pages/blog" */))
const _03af909b = () => interopDefault(import('..\\pages\\blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _46df830d = () => interopDefault(import('..\\pages\\blog-left-sidebar.vue' /* webpackChunkName: "pages/blog-left-sidebar" */))
const _23cbc1c4 = () => interopDefault(import('..\\pages\\blog-right-sidebar.vue' /* webpackChunkName: "pages/blog-right-sidebar" */))
const _eccd1668 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _05f8330b = () => interopDefault(import('..\\pages\\login-register.vue' /* webpackChunkName: "pages/login-register" */))
const _b1feb09a = () => interopDefault(import('..\\pages\\our-clients.vue' /* webpackChunkName: "pages/our-clients" */))
const _37dddc42 = () => interopDefault(import('..\\pages\\our-team.vue' /* webpackChunkName: "pages/our-team" */))
const _7960ecfe = () => interopDefault(import('..\\pages\\our-working-process.vue' /* webpackChunkName: "pages/our-working-process" */))
const _4f247745 = () => interopDefault(import('..\\pages\\project.vue' /* webpackChunkName: "pages/project" */))
const _6a4b8d3a = () => interopDefault(import('..\\pages\\project-details.vue' /* webpackChunkName: "pages/project-details" */))
const _1438c4e1 = () => interopDefault(import('..\\pages\\service.vue' /* webpackChunkName: "pages/service" */))
const _6b130254 = () => interopDefault(import('..\\pages\\service-details.vue' /* webpackChunkName: "pages/service-details" */))
const _cf777504 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _788c6ab9,
    name: "about"
  }, {
    path: "/blog",
    component: _39ce6ba6,
    name: "blog"
  }, {
    path: "/blog-details",
    component: _03af909b,
    name: "blog-details"
  }, {
    path: "/blog-left-sidebar",
    component: _46df830d,
    name: "blog-left-sidebar"
  }, {
    path: "/blog-right-sidebar",
    component: _23cbc1c4,
    name: "blog-right-sidebar"
  }, {
    path: "/contact",
    component: _eccd1668,
    name: "contact"
  }, {
    path: "/login-register",
    component: _05f8330b,
    name: "login-register"
  }, {
    path: "/our-clients",
    component: _b1feb09a,
    name: "our-clients"
  }, {
    path: "/our-team",
    component: _37dddc42,
    name: "our-team"
  }, {
    path: "/our-working-process",
    component: _7960ecfe,
    name: "our-working-process"
  }, {
    path: "/project",
    component: _4f247745,
    name: "project"
  }, {
    path: "/project-details",
    component: _6a4b8d3a,
    name: "project-details"
  }, {
    path: "/service",
    component: _1438c4e1,
    name: "service"
  }, {
    path: "/service-details",
    component: _6b130254,
    name: "service-details"
  }, {
    path: "/",
    component: _cf777504,
    name: "index"
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
