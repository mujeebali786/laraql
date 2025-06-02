<template>
    <div class="row">
        <HeadingComp :heading="heading" />
        <div class="col-12 col-md-11">
        <div class="fs-22 text-weight-medium q-mb-md">
            Customization
        </div>
            <UserCopy :text-copy="copyModel" />
            <!-- <q-tabs no-caps v-model="changeTabs" :vertical="$q.screen.xs" active-color="pink" :class="$q.screen.lt.sm ? 'h-170' : ''">
                <q-tab v-for="tab in tabs" :key="tab.id" :name="tab.name" :label="tab.label"/>
            </q-tabs>
            <q-tab-panels v-model="changeTabs" animated> 
                <q-tab-panel name="model" class="q-px-none">
                    <UserCopy :text-copy="copyModel" />
                </q-tab-panel>
                <q-tab-panel name="relationships" class="q-px-none">
                    <UserCopy :text-copy="copyText" />
                </q-tab-panel>
                <q-tab-panel name="field" class="q-px-none">
                    <UserCopy :text-copy="copyField" />
                </q-tab-panel>
            </q-tab-panels> -->
        </div>
    </div>
    <div class="row q-my-md">
        <div class="col-12 col-md-11">
            <NoteComp :notes="notes" :items="items" />
        </div>
    </div>
</template>

<script setup>
import HeadingComp from 'src/components/HeadingComp.vue';
import NoteComp from 'src/components/NoteComp.vue';
import UserCopy from 'src/components/UserCopy.vue';
import { ref } from 'vue';

// const changeTabs = ref('model')

const items = [
    {
        code: `graphqlFields()`,
        text: 'Define which fields should be exposed in GraphQL',
    },
    {
        code: `graphqlQueries()`,
        text: 'Define custom queries for your model',
    },
    {
        code: `graphqlMutations()`,
        text: 'Define custom mutations for your model',
    },
]

const notes = [
    {
        label: 'Model Costomization',
        para: 'You can customize how your model is exposed in GraphQL by implementing the following methods:',
    },
]

const heading = [
    {
        icon: 'mdi-database',
        class: 'text-pink',
        label: 'Models',
        para: 'LaraQL works with your existing Laravel models. By adding the ModelAttribute attribute, you enable GraphQL functionality for your model.'
    }
]

// const tabs = [
//     {
//         name: 'model',
//         label: 'Basic Model',
//     },
    // {
    //     name: 'relationships',
    //     label: 'With Relationships',
    // },
    // {
    //     name: 'field',
    //     label: 'Custom Fields',
    // },
// ]

const copyModel = `<?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Nodesol\\LaraQL\\Attributes\\Model as ModelAttribute;

#[ModelAttribute(
    operations: [
        'create' => [
            'inputs' => [
                'name' => 'String!',
            ],
            'return_type' => 'User!',
        ],
        'update' => [
            'inputs' => [
                'id' => 'ID!',
                'name' => 'String!',
            ],
            'return_type' => 'User!',
        ],
        'delete' => [
            'inputs' => [
                'id' => 'ID!',
            ],
        ],
    ],
)]
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

// const copyText = `?php

// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;
// use Nodesol\LaraQL\Traits\HasGraphQL;

// class Post extends Model
// {
//     use HasGraphQL;
    
//     protected $fillable = [
//         'title', 'content', 'user_id',
//     ];
    
//     public function user()
//     {
//         return $this-&gt;belongsTo(User::class);
//     }
    
//     public function comments()
//     {
//         return $this-&gt;hasMany(Comment::class);
//     }
// }`

// const copyField = `<?php

// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;
// use Nodesol\LaraQL\Traits\HasGraphQL;

// class User extends Model
// {
//     use HasGraphQL;
    
//     protected $fillable = [
//         'name', 'email', 'password',
//     ];
    
//     // Define which fields should be exposed in GraphQL
//     public function graphqlFields()
//     {
//         return [
//             'id' => 'ID!',
//             'name' => 'String!',
//             'email' => 'String!',
//             'created_at' => 'DateTime',
//             'updated_at' => 'DateTime',
//             // Password is excluded for security
//         ];
//     }
// }`

</script>