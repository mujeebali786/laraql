<template>
    <div class="row justify-end" :class="$q.screen.lt.md ? 'q-py-xl' : ''">
        <div class="col-12 col-md-11 col-lg-10">
            <q-card class="q-pa-md">
                <div class="q-py-sm row items-center rounded-trl">
                    <div class="row q-gutter-xs q-pl-xs">
                        <div v-for="item in circles" :key="item.id" :class="item.class" class="q-ma-xs small-circle"></div>
                    </div>
                </div>
                <q-separator class="q-mb-sm text-muted" />
                <div class="bg-muted rounded-brl flex row" :class="$q.screen.lt.sm ? 'q-pa-sm':'q-pa-md'">
                    <div class="col-10 text-mute text-weight-medium self-center q-px-sm source-code-pro" :class="$q.screen.lt.sm ? 'fs-16' : 'fs-18'">
                        <span class="text-pink">composer</span> require nodesol/laraql
                    </div>
                    <div class="text-right col-2">
                        <q-btn :dense="$q.screen.lt.lg" flat @click="handleCopy()" class="q-ma-sm text-mute" :icon="icon" />
                    </div>
                </div>
            </q-card>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { copyToClipboard, useQuasar } from 'quasar';

const $q = useQuasar()

const icon = ref('content_copy')

const circles = [
    {
        class: 'bg-pink'
    },
    {
        class: 'bg-orange'
    },
    {
        class: 'bg-green'
    },
]

const textToCopy = 'composer require nodesol/laraql'

function handleCopy() {
    copyToClipboard(textToCopy)
    icon.value = 'check'
    setTimeout(() => {
        icon.value = 'content_copy'
    }, 3000);
}
</script>

<style scoped></style>
