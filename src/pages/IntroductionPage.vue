<template>
    <div class="row q-pb-md">
        <div class="col-12">
            <div class="q-px-sm text-red-4 bg-red-3 inline-block round-24">
                Documentation
            </div>
            <div class="fs-36 text-black text-weight-bold q-mt-xs">
                LaraQL Documentation
            </div>
            <p class="fs-18 text-mute q-mt-xs">
                Learn how to use LaraQL to generate GraphQL schemas for your Laravel models.
            </p>
            <span class="" v-for="item in items" :key="item.id">
                <q-icon size="16px" :name="item.icon" />
                <span class="q-px-sm text-mute">{{ item.text }}</span>
                <span class="q-mx-md inline-block" v-if="item.class" :class="item.class"></span>
            </span>
        </div>
    </div>
    <div class="row q-mt-md">
        <HeadingComp :heading="heading" />
    <div class="q-gutter-x-sm q-mb-md q-py-sm">
        <RouterLink v-for="img in images" :key="img.id">
            <q-img class="q-my-sm" :src="img.src" :width="img.width" height="20px" />
        </RouterLink>
    </div>
    </div>
    <div class="row q-mb-md" :class="$q.screen.lt.md ? '' : 'q-gutter-x-md'">
        <CardComp />
    </div>
    <div class="row q-my-lg q-pt-md">
        <HeadingComp :heading="heading1" />
        <div class="flex col-12 q-mb-sm" v-for="list in lists" :key="list.id">
            <q-icon name="task_alt" size="20px" color="green"/>
            <div class="q-pl-sm">
                {{ list.text }}
            </div>
        </div>
    </div>
</template>

<script setup>
import CardComp from 'components/CardComp.vue'
import HeadingComp from 'src/components/HeadingComp.vue';

const lists = [
    {
        text: 'PHP 8.1 or higher'
    },
    {
        text: 'Laravel 9.0 or higher'
    },
    {
        text: 'Composer 2.0 or higher'
    },
]

const images = [
    {
        src: '/src/assets/packagist.svg',
        width: '108px'
    },
    {
        src: '/src/assets/run-tests.svg',
        width: '80px'
    },
    {
        src: '/src/assets/download.svg',
        width: '100px'
    },
];

const items = [
    {
        icon: 'img:/src/assets/clock.svg',
        text: '10 min read',
        class: 'vertical'
    },
    {
        icon: 'img:/src/assets/github1.svg',
        text: 'Edit on GitHub',
    },
];

const heading = [
    {
        img: '/src/assets/info.svg',
        label: 'Introduction',
        para: 'LaraQL is a powerful Laravel package that automates the process of creating GraphQL schemas for your Laravel models. It eliminates the need to manually define types, queries, and mutations for each model,saving you time and reducing boilerplate code.'
    }
];

const heading1 = [
    {
        icon: 'task_alt',
        class: 'text-red-4',
        label: 'Requirements',
        para: 'Make sure your environment meets these requirements before installation'
    }
]

</script>

<style scoped>
.vertical {
    background-color: #e5e5e5;
    width: 1px;
    height: 16px;
}
</style>