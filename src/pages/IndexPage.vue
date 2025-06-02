<template>
  <q-page class="bg-white">
    <div class="row self-center custom-gradient"  :class="$q.screen.lt.md ? 'q-px-md' : ''">
      <div class="col-11 col-lg-10 q-mx-auto self-center">
        <div class="row self-center">
          <div class="col-md-5 col-12 self-center h-100">
            <LaravelPakage />
          </div>
          <div class="col-md-7 col-12 self-center">
            <CopyComp />
          </div>
        </div>
      </div>
    </div>
    <div class="row  q-pb-xl">
      <div class="col-11 col-lg-10 q-mx-auto">
        <div class="row">
          <UiCards />
        </div>
      </div>
    </div>
    <div class="row q-py-xl custom-gradient" :class="$q.screen.lt.md ? '': 'h-100 content-center'">
      <div class="col-11 col-lg-10 q-mx-auto q-py-xl">
        <div class="row" :class="$q.screen.lt.md ? '':'q-py-xl'">
          <div class="col-12 col-md-6 col-lg-7 self-center">
            <QuickExm/>
          </div>
          <div class="col-12 col-md-6 col-lg-5" :class="$q.screen.lt.md ? 'q-py-xl':''">
            <Userphp/>
          </div>
        </div>
      </div>
    </div>
    <div class="row q-py-xl content-center bg-muted">
      <div class="col-12 text-center fs-48 text-weight-bolder q-pt-xl">
        Ready to get started?
      </div>
      <div class="text-mute text-center col-12 fs-20 q-mb-xs">
        Start using LaraQL in your Laravel application today.
      </div>
      <div class="col-12 text-center q-gutter-x-md q-pb-xl">
        <q-btn no-caps class="rounded-sm q-mt-md text-weight-light q-py-sm" color="pink" label="Installation Guide" />
        <q-btn no-caps class="rounded-sm q-mt-md border-1 text-weight-light no-shadow q-py-sm text-black" color="white" label="Read Documentation" />
      </div>
    </div>
    <FooterComp/>
  </q-page>
</template>


<script setup>
import CopyComp from 'src/components/CopyComp.vue';
import FooterComp from 'src/components/FooterComp.vue';
import LaravelPakage from 'src/components/LaravelPakage.vue';
import QuickExm from 'src/components/QuickExm.vue';
import UiCards from 'src/components/UiCards.vue';
import Userphp from 'src/components/Userphp.vue';

</script>

<style scoped>
</style>
