<template>
  <div :class="$q.screen.lt.md ? 'column q-gutter-y-md text-center' : 'flex'">
    <div v-for="(item, index) in items" :key="index">
      <router-link 
      v-if="item.to.startsWith('/')"
      :to="item.to"
      :class="$q.screen.lt.lg ? 'q-px-sm' : 'q-px-md'"
      exact-active-class="text-pink"
      class="text-capitalize text-black"
      >
      {{ item.label }}
      </router-link>
      <a
      v-else
      :href="item.to"
      rel="laraql"
      target="_blank"
      :class="$q.screen.lt.lg ? 'q-px-sm' : 'q-px-md'"
      class="text-capitalize text-black"
      >
      {{ item.label }}
      </a>
    </div>
  </div>
</template>

<script setup>

const items = [
  {
    label: 'documentation',
    to: '/intro'
  },
  {
    label: 'Git hub',
    to: 'https://github.com/nodesol/laraql'
  },
];

</script>
