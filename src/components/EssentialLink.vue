<template>
  <q-item dense class="q-py-sm" v-for="link in links" :key="link.text">
    <q-item-section>
      <router-link active-class="text-pink border-left" :to="link.to"
        class="text-mute q-pl-md text-weight-medium">
        {{ link.text }}
      </router-link>
      <div v-if="link.label" :class="link.class" class="text-weight-bold">
        {{ link.label }}
      </div>
      <a v-if="link.href" :href="link.href" rel="github" target="_blank" class="text-mute">
        {{ link.ancher }}
      </a>
    </q-item-section>
    <q-item-section class="" v-if="link.sideicon" side>
      <q-icon size="12px" :class="$q.screen.lt.lg ? '' : 'q-pr-xl'" :name="link.sideicon" />
    </q-item-section>
  </q-item>
</template>

<script setup>

const links = [
  {
    label: 'Getting Started',
    class: 'text-black'
  },
  {
    text: 'Introduction',
    to: '/intro'
  },
  {
    text: 'Installation',
    to: '/install'
  },
  {
    text: 'Configuration',
    to: '/config'
  },
  {
    label: 'Core Concepts',
    class: 'text-black'
  },
  {
    text: 'Basic Usage',
    to: '/basic'
  },
  {
    text: 'Models',
    to: '/model'
  },
  {
    text: 'Schemas',
    to: '/schema'
  },
  {
    text: 'Queries',
    to: '/query'
  },
  {
    label: 'Resources',
    class: 'text-black'
  },
  {
    ancher: 'GitHub Repository',
    sideicon: 'open_in_new',
    href: 'https://github.com/nodesol/laraql'
  },
  {
    text: 'Support ',
    to: '/asd'
  }
]
</script>


<style scoped></style>