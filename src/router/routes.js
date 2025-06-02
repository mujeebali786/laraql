const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'intro', component: () => import('pages/IntroductionPage.vue') },
      { path: 'install', component: () => import('pages/InstallationPage.vue') },
      { path: 'config', component: () => import('pages/ConfigurationPage.vue') },
      { path: 'basic', component: () => import('pages/Basicpage.vue') },
      { path: 'model', component: () => import('pages/ModelPage.vue') },
      { path: 'schema', component: () => import('pages/SchemasPage.vue') },
      { path: 'query', component: () => import('pages/QueryPage.vue') },
      { path: 'exp', component: () => import('pages/ExamplePage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
