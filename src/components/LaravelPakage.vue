<template>
    <div class="content-center full-height self-center">
        <q-btn dense no-caps outline rounded color="pink" class=" q-px-md">
            Laravel Package
        </q-btn>
        <div class="text-pink text-weight-bolder libre fs-48 q-py-md">
            Seamless GraphQL For Laravel Models
        </div>
        <div class="text-dark text-weight-medium libre fs-22">
            Transform your Eloquent models into powerful GraphQL APIs with zero boilerplate code.
        </div>
        <div class="libre">
            <q-btn no-caps class="q-mr-md icon rounded-sm q-px-md q-py-sm q-mt-lg" text-color="white" color="red" label="Get Started" to="/doc"
                icon-right="arrow_forward" />
            <q-btn icon="img:src/assets/github.svg" no-caps class="icon bg-white rounded-sm border q-px-md q-py-sm text-weight-regular q-mt-lg" label="GitHub"/>
        </div>
        <div class="q-mb-lg q-mt-md" >
            <span v-for="item in items" :key="item.id">
                <q-icon size="16px" :name="item.src" />
                <span class="text-mute q-px-sm">{{item.text}}</span>
            </span>
        </div>
    </div>
</template>

<script setup>

const items = [
    {
        src: 'img:src/assets/logo2.svg',
        text: 'Latest: v1.0.0'
    },
    {
        src: 'img:src/assets/logo3.svg',
        text: 'MIT License'
    },
]

</script>

<style scoped>
</style>