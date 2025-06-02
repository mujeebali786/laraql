<template>
    <div class="row">
        <HeadingComp :heading="heading" />
        <UserCopy :text-copy="textCopy" />
    </div>
    <div class="row q-my-md">
        <div class="col-12 col-md-11">
            <q-card bordered class="q-pa-md no-shadow rounded-sm">
                <div class="fs-16 fw-6 q-mb-sm">
                    Configuration Options
                </div>
                <div class="row" v-for="item in items" :key="item.id">
                    <div class="col-12 col-sm-4 bg-muted q-pa-xs self-center">
                        {{ item.text }}
                    </div>
                    <div class="col-12 col-sm-8 q-pa-sm">
                        {{ item.label }}
                    </div>
                </div>
            </q-card>
        </div> 
    </div>
</template>

<script setup>
import HeadingComp from 'src/components/HeadingComp.vue';
import UserCopy from 'src/components/UserCopy.vue';

const heading = [
    {
        img: '/src/assets/setting.svg',
        label: 'Configuration',
        para: 'After publishing the configuration file, you can find it at config/laraql.php. Here you can configure various aspects of the package.'
    }
]

const items = [
    {
        text: 'Directories',
        label: 'The URL path where the GraphQL endpoint will be exposed'
    },
    {
        text: 'Models',
        label: 'Auto to apply to the GraphQL endpoint'
    },
    {
        text: 'Namespace',
        label: 'The namespace for your GraphQL types'
    },
]

const textCopy = `<?php

return [
    'directories' => [
        app_path('Models'),
        app_path('GraphQL'),
    ],
    'models' => [
        /** @phpstan-ignore larastan.noEnvCallsOutsideOfConfig */
        'auto_include' => (bool) env('LARAQL_MODELS_AUTO_INCLUDE', false),
    ],
    /** @phpstan-ignore larastan.noEnvCallsOutsideOfConfig */
    'cache' => (bool) env('LARAQL_CACHE', ! config('app.debug')),
];`

</script>