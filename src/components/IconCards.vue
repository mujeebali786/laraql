<template>
    <div class="col-12 col-sm-6 q-py-sm flex" v-for="card in cards" :key="card.id" :class="$q.screen.gt.xs ? card.class : ''">
        <q-card bordered class="q-pa-md row no-shadow rounded-sm">
            <div class="row q-mb-sm ">
                <q-icon size="20px" :name="card.src" />
                <div class="fs-16 q-ml-sm text-weight-medium">
                    {{ card.text }}
                </div>
            </div>
            <div class="text-mute">
                {{ card.para }}
            </div>
            <UserCopy class="q-mt-sm full-width" v-if="card.copyText" :text-copy="card.copyText" />
        </q-card>
    </div>
</template>

<script setup>
import UserCopy from './UserCopy.vue';

const props = defineProps({
    cards: {
        type: Array,
        required: true,
    }
})

</script>