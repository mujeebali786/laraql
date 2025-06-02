<template>
    <div class="col-12 col-md-11 text-black" v-for="item in heading" :key="item.id">
        <div class="flex">
            <q-avatar size="32px" class="bg-red-3 self-center">
            <q-img v-if="item.img" width="16px" class="" :src="item.img" />
            <q-icon v-else size="16px" :class="item.class" :name="item.icon" />
        </q-avatar>
        <div class="self-center fs-24 text-weight-bold q-pl-sm">
            {{ item.label }}
        </div>
        </div>
        <p class="fs-16 q-mt-md">
            {{ item.para }}
        </p>
    </div>
</template>

<script setup>
const props = defineProps({
    heading: {
        type: Array,
        required: true,
    }
})

</script>