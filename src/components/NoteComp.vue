<template>
    <q-card class="q-pa-md no-shadow border-1 bg-white">
        <div v-for="note in notes" :key="note.id">
        <div class="flex q-mb-sm">
            <div>
                <q-img width="20px" src="/src/assets/circle.svg" />
            </div>
            <div class="q-ml-sm fs-16 text-weight-medium">
                {{ note.label }}
            </div>
        </div>
        <div class="text-mute q-mb-sm">
            {{ note.para }}
        </div>
        </div>
        <div v-for="item in items" v-if="items" :key="item.id" class="text-mute q-mb-xs">
            <code class="bg-muted fs-12 py-2 rounded-sm">
                {{ item.code }}
            </code>
            <span class="q-pl-sm q-py-sm">
                {{ item.text }}
            </span>
        </div>
        <UserCopy v-if="textCopy"  :text-copy="textCopy" />
    </q-card>
</template>

<script setup>
import UserCopy from './UserCopy.vue';

const props = defineProps({
    notes: {
        type: Array,
        required: true,
    },
    items: {
        type: Array,
        required: true,
    },
    textCopy: {
        type: String,
        required: true,
    },
})

</script>