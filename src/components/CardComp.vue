<template>
    <div :class="$q.screen.sm ? card.class : ''" class="col-sm-4 flex col-md-3 col-12 q-pt-md" v-for="card in cards" :key="card.id">
    <q-card class="q-pa-md">
        <q-item class="no-padding">
            <div class="self-center">
                <q-icon class="q-pr-sm text-pink" size="20px" :name="card.icon" />
            </div>
            <div class="self-center fs-16 fw-6">
                {{ card.label }}
            </div>
        </q-item>
        <div class="text-mute">
            {{ card.text }}
        </div>
    </q-card>
    </div>
</template>

<script setup>
const cards = [
    {
        icon: 'electric_bolt',
        label: 'Automatic Schema Generation',
        text: 'Generate GraphQL schemas automatically from your Laravel models.',
    },
    {
        icon: 'mdi-database',
        label: 'Relationship Support',
        text: 'Automatically handle Laravel relationships in your GraphQL schema.',
        class: 'q-px-sm'
    },
    {
        icon: 'code',
        label: 'Custom Resolvers',
        text: 'Define custom resolvers for complex queries and mutations.',
    },
];
</script>