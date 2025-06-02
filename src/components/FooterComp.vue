<template>
    <footer class="bg-white row q-py-sm">
        <div class="col-11 col-md-10 q-mx-auto q-py-lg">
            <div class="row">
                <div class="col-12 col-sm-6"  :class="$q.screen.lt.sm ? 'text-center':''">
                    <p class="q-mb-none q-py-xs text-mute">© 2025 LaraQL. All rights reserved. Created by
                        <a href="https://github.com/amermchaudhary" class="text-mute underline underline-offset-4">Amer Chaudhary</a>
                    </p>
                </div>
                <div class="col-12 col-sm-6" :class="$q.screen.lt.sm ? 'text-center':' text-right'">
                    <a href="">
                        <q-icon class="icon1" size="20px" name="img:src/assets/github1.svg" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
</script>

<style scoped>
</style>