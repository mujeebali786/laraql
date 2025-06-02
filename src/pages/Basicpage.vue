<template>
    <div class="row">
        <HeadingComp :heading="heading" />
        <UserCopy :text-copy="textToCopy" />
    </div>
    <div class="q-my-md fs-16">
        Once you've added the attribute to your model, LaraQL will automatically generate the following:
    </div>
    <div class="row">
        <div class="col-md-11 col-12">
            <div class="row q-mb-md">
                <IconCards :cards="cards" />
            </div> 
            <div class="row q-mb-md">
                <q-card bordered class="no-shadow col-12 q-pa-md rounded-sm">
                    <div class="fs-18 text-weight-medium">
                        Example Query
                    </div>
                    <div class="text-mute q-my-sm">
                        Here's an example of a GraphQL query that you can use with LaraQL:
                    </div>
                    <UserCopy :text-copy="copyText" />
                </q-card>
            </div>
        </div>
    </div>
</template>

<script setup>
import HeadingComp from 'src/components/HeadingComp.vue';
import IconCards from 'src/components/IconCards.vue';
import UserCopy from 'src/components/UserCopy.vue';

const cards = [
    {
        src: 'img:/src/assets/queryred.svg',
        text: 'GraphQL Type',
        para: "A GraphQL type based on your model's properties and relationships.",
        class: 'q-pr-sm '
    },
    {
        src: 'img:/src/assets/queryred.svg',
        text: 'Query Resolvers',
        para: "Query resolvers for fetching single models and collections.",
        class: 'q-pl-sm'
    },
    {
        src: 'img:/src/assets/queryred.svg',
        text: 'Mutation Resolvers',
        para: "Mutation resolvers for creating, updating, and deleting models.",
        class: 'q-pr-sm'
    },
    {
        src: 'img:/src/assets/queryred.svg',
        text: 'Relationship Resolvers',
        para: "Resolvers for handling relationships between models.",
        class: 'q-pl-sm'
    },
]

const heading = [
    {
        icon: 'code',
        class: 'text-red-4',
        label: 'Basic Usage',
        para: 'To use LaraQL with your Laravel models, you need to add the ModelAttribute attribute to your model. This will automatically generate a GraphQL schema for your model.'
    }
]

const textToCopy = `<?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Nodesol\\LaraQL\\Attributes\\Model as ModelAttribute;

#[ModelAttribute()]
class User extends Model
{
    protected $fillable = [
        'name', 'email', 'password',
    ];

    public function posts(): HasMany
    {
        return $this->hasMany(Post::class);
    }
}`

const copyText = `query {
  users {
    id
    name
    email
    password
    posts {
      id
      title
      content
    }
  }
}`

</script>