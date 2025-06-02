<template>
  <div class="row">
    <HeadingComp :heading="heading" />
    <div class="col-12 col-lg-11">
      <div class="row">
        <IconCards class="" :cards="cards" />
      </div>
    </div>
    <div class="col-12 col-lg-11 q-my-sm">
      <NoteComp :notes="notes" :text-copy="textCopy" />
    </div>
    <q-card bordered class="q-my-md no-shadow col-12 col-lg-11 q-pa-lg">
      <div class="fs-20 text-weight-bold q-mb-md">
        Ready to Get Started?
      </div>
      <p class="fs-16">
        Now that you understand the basics of LaraQL, you can start using it in your Laravel application. Check out the examples and API reference for more information.
      </p>
      <div class="q-gutter-x-md q-gutter-y-md">
        <q-btn no-caps class="q-py-sm" label="View Examples" color="pink" icon-right="arrow_forward" />
        <q-btn outline no-caps class="q-py-sm" label="API Reference" />
        <q-btn outline no-caps class="q-py-sm" label="GitHub" icon="img:/src/assets/github.svg" />
      </div>
    </q-card>
  </div>
</template>

<script setup>
import HeadingComp from 'src/components/HeadingComp.vue';
import IconCards from 'src/components/IconCards.vue';
import NoteComp from 'src/components/NoteComp.vue';

const heading = [
  {
    icon: 'img:/src/assets/query.svg',
    label: 'Queries',
    para: 'LaraQL automatically generates queries for your models. By default, it generates the following queries:'
  }
]

const notes = [
  {
    label: 'Custom Queries',
    para: 'You can define custom queries for your model by implementing the graphqlQueries() method: '
  }
]

const cards = [
  {
    src: 'img:/src/assets/queryred.svg',
    text: 'Single Model Query',
    para: 'Query to fetch a single model by ID.',
    class: 'q-pr-sm',
    copyText: copytext1,
  },
  {
    src: 'img:/src/assets/queryred.svg',
    text: 'Collection Query',
    para: 'Query to fetch a collection of models with pagination.',
    class: 'q-pl-sm',
    copyText: copytext2,
  }
]

const copytext1 = `query {
  user(id: 1) {
    id
    name
    email
  }
}`

const copytext2 = `query {
  users(page: 1, limit: 10) {
    id
    name
    email
  }
}`

const textCopy = `public function graphqlQueries()
{
    return [
        'findUserByEmail' => [
            'type' => 'User',
            'args' => [
                'email' => ['type' => 'String!'],
            ],
            'resolve' => function ($root, $args) {
                return User::where('email', $args['email'])->first();
            },
        ],
    ];
}`

</script>

<style scoped>
:deep(.q-btn .q-icon){
  font-size: 16px !important;
}
</style>