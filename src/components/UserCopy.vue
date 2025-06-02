<template>
    <div class="bg-muted rounded-sm col-12 col-md-11 relative-position" :class="$q.screen.sm ? 'q-pa-sm':'q-pa-md'">
        <q-btn :dense="$q.screen.lt.lg" flat @click="changeIcon()" class="fixed-top-right absolute q-ma-sm text-mute" :icon="icon" />
        <code class="break-word text-mute fs-18 source-code-pro">
            {{textCopy}}
        </code>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { copyToClipboard, useQuasar } from 'quasar';

const $q = useQuasar()
const icon = ref('content_copy')

const props = defineProps({
    textCopy: {
        type: String,
        required: true,
    }
})

function changeIcon(){
    copyToClipboard(props.textCopy);
    icon.value = 'check';
    setTimeout(() => {
        icon.value = 'content_copy'
    }, 3000);
}

</script>