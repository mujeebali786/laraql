<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white transparent-1 blur  text-red">
      <div class="row q-py-sm" :class="$q.screen.lt.md ? 'q-px-md' : ''">
        <div class="col-12 col-md-11 col-lg-10 q-mx-auto">
          <div class="row">
            <div class="col-5 text-pink-1 col-sm-3 col-md-2 self-center flex">
              <q-icon name="img:/src/assets/logo1.svg" size="34px" class=" self-center" />
              <router-link to="/" exact-active-class="text-pink" class="q-pl-md text-pink libre text-weight-bolder fs-22 self-center">
                LaraQL
              </router-link>
            </div>
            <div class="col-md-6 gt-sm col-11 self-center flex justify-end" :class="$q.screen.lt.lg ? ' ' : 'q-pr-md'">
              <NavComp />
            </div> 
            <div class="col-7 col-md-4 col-sm-9 self-center" :class="$q.screen.lt.lg ? 'q-pl-sm' : 'q-pl-md'">
              <div class="row justify-end">
                <div class="col-9 col-sm-8 col-md-10 self-center gt-xs">
                  <q-input outlined dense rounded color="red" class="full-width" placeholder="search">
                    <template v-slot:prepend>
                      <q-icon name="search" color="red" />
                    </template>
                  </q-input>
                </div>
                <div class="col-sm-4 col-md-2 flex justify-end">
                  <q-btn flat round dense class="gt-xs" size="20px" icon="img:src/assets/github1.svg" color="pink" />
                  <q-btn flat round dense @click="toggleLeftDrawer()" class="lt-md bg-muted q-ml-md" size="20px" icon="menu" color="pink" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-header>

    <q-drawer 
    v-model="leftDrawerOpen"
    :width="300"
    :breakpoint="1023"
    v-if="$q.screen.lt.md"
    bordered
    side="right"
    >
    <div class="q-pa-lg">
      <NavComp/>
    </div>
    </q-drawer>

    <q-page-container v-if="$route.path !== '/'" class="lt-md q-px-md">
      <div class="row q-pt-md">
        <div class="col-12">
          <q-btn round @click="toggleRightDrawer()" class="bg-muted text-pink" icon="arrow_forward_ios" />
          <q-drawer 
          v-model="rightDrawerOpen" 
          :width="300" 
          :breakpoint="1023" 
          v-if="$q.screen.lt.md" 
          bordered
          >
          <EssentialLink />
          </q-drawer>
        </div>
      </div>
    </q-page-container>

    <div v-if="$route.path !== '/'" class="row q-py-md">
      <div class="col-12 col-md-11 col-lg-10 q-mx-auto">
        <div class="row">
          <div class="col-3 gt-sm h-100 q-py-md q-pr-lg">
            <q-page-container class="fixed">
              <EssentialLink />
            </q-page-container>
          </div>
          <div class="col-12 col-md-9 q-mt-lg" :class="$q.screen.lt.md ? 'q-px-md' : ''">
            <q-page-container :class="$q.screen.lt.md ? 'no-padding' : ''">
              <router-view />
            </q-page-container>
          </div>
        </div>
      </div>
    </div>

    <q-page-container v-else>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import NavComp from 'components/NavComp.vue'
import EssentialLink from 'components/EssentialLink.vue'

const leftDrawerOpen = ref(false)
const rightDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value
}

</script>
