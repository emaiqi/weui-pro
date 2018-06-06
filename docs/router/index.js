import Vue from 'vue'
import Router from 'vue-router'
import NavConfig from './nav.config.yml'

Vue.use(Router)

function regeisterRoute (navConfig) {
  const routes = []
  const parentRoutes = {}


  for (const pageName in NavConfig) {
    NavConfig[pageName].forEach(nav => {
      const parentName = nav.name
      parentRoutes[`${parentName}`] = parentRoutes[`${parentName}`] || addParentRoute(parentName)

      if (nav.groups) {
        nav.groups.forEach(group => {
          group.items.forEach(item => {
            addRoute(parentName, item)
          })
        })
      } else if (nav.items) {
        nav.items.forEach(item => {
          addRoute(parentName, item)
        })
      }
    })
  }

  function addParentRoute (parentName) {
    return {
      path: `/${parentName.toLowerCase()}`,
      component: require(`../views/${parentName.toLowerCase()}.vue`),
      children: []
    }
  }

  function addRoute (parentName, item) {
    parentRoutes[`${parentName}`].children.push({
      path: `${item.name.toLowerCase()}`,
      name: `${item.name}`,
      component: require(`../markdown/${item.name.toLowerCase()}.md`)
    })
  }

  for (const key in parentRoutes) {
    if (parentRoutes.hasOwnProperty(key)) {
      routes.push(parentRoutes[key])
    }
  }

  return routes
}

let routes = regeisterRoute(NavConfig)

routes = routes.concat([{
  path: '/',
  name: 'Home',
  component: require('../views/index.vue')
}, {
  path: '*',
  redirect: { name: 'Home' }
}])

routes.forEach(page => {
  if (page.path === '/guide') {
    page.children.push({
      path: '',
      name: 'Guide',
      redirect: { name: page.children[0].name }
    })
  } else if (page.path === '/docs') {
    page.children.push({
      path: '',
      name: 'Docs',
      redirect: { name: page.children[0].name }
    })
  } else if (page.path === '/resource') {
    page.children.push({
      path: '',
      name: 'Resource',
      redirect: { name: page.children[0].name }
    })
  }
})

// routes.push({
//   path: '*',
//   redirect: { name: 'Home' }
// })

const router = new Router({
  routes,
  mode: 'history',
  root: process.env.serverConfig.portalPrefix,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }

    return { x: 0, y: 0 }
  }
})

export default router
