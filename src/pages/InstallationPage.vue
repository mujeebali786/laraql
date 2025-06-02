<template>
    <div class="row">
        <HeadingComp :heading="heading" />
        <UserCopy :text-copy="textCopy" />
        <!-- <div class="col-12 col-md-11 q-py-md">
            <NoteComp :notes="notes" :text-copy="textToCopy" />
        </div> -->
        <div class="q-py-md">
            After installing the package, you can publish the configuration file and schema:
        </div>
        <UserCopy :text-copy="copysource" />
        <div class="col-12 col-md-11 q-py-md">
            <NoteComp :notes="notes" />
        </div>
    </div>
</template>

<script setup>
import HeadingComp from 'src/components/HeadingComp.vue';
import NoteComp from 'src/components/NoteComp.vue';
import UserCopy from 'src/components/UserCopy.vue';

const heading = [
    {
        img: '/src/assets/laraql.svg',
        label: 'Installation',
        para: 'You can install the package via composer. LaraQL requires PHP 8.0+ and Laravel 8.0+.'
    }
]

const textCopy = `composer require nodesol/laraql`;

// const textToCopy = `composer require nodesol/laraql --ignore-platform-reqs`;

const copysource = `php artisan vendor:publish --tag=laraql-config
php artisan vendor:publish --tag=laraql-schema`

const notes = [
    {
        label: 'Note',
        para: "The service provider will be automatically registered through Laravel's package discovery. For Lumen, you need to manually register the service provider in your bootstrap/app.php file",
    }
]

</script>