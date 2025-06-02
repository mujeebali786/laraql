<template>
    <q-card class="q-pa-md">
        <div class="q-py-sm row items-center rounded-trl">
            <div class="row q-gutter-xs q-pl-xs">
                <div class="q-ma-xs bg-pink small-circle"></div>
                <div class="q-pl-xs q-ma-none">
                    User.php
                </div>
            </div>
        </div>
        <q-separator class="q-mb-sm text-muted" />
        <div class="bg-dark-light bg-muted q-pa-md rounded-brl">
            <code class="q-ma-none break-word">
                <code class="fs-18 text-mute source-code-pro">
                    {{ textToCopy }}
                </code>
            </code>
        </div>
    </q-card>
</template>

<script setup>

const textToCopy = `<?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Nodesol\\LaraQL\\Attributes\\Model as ModelAttribute;

#[ModelAttribute()]
class User extends Model
{
    protected $fillable = [
        'name', 'email', 'password',
    ]
}`

</script>

<style scoped>
</style>
