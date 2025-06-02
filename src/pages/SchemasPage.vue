<template>
  <div class="row">
    <HeadingComp :heading="heading" />
    <q-card bordered class="col-12 col-md-11 no-shadow q-pa-md">
      <div class="fs-16 fw-6">
        Generated Schema Example
      </div>
      <p class="q-my-sm text-mute">
        Here's an example of a schema that LaraQL would generate for a User model:
      </p>
      <UserCopy :text-copy="copyText" />
    </q-card>
    <div class="col-12 col-md-11 q-my-md fs-16">
      LaraQL automatically handles the mapping between your Laravel model properties and GraphQL types. It also
      generates the necessary resolvers to handle queries and mutations.
    </div>
  </div>
</template>

<script setup>
import HeadingComp from 'src/components/HeadingComp.vue';
import UserCopy from 'src/components/UserCopy.vue';

const heading = [
  {
    icon: 'img:/src/assets/schema.svg',
    label: 'Schemas',
    para: 'LaraQL automatically generates GraphQL schemas based on your Laravel models. The schema includes types, queries, and mutations for your models.'
  }
]

const copyText = `# User type
type User {
  id: ID!
  name: String!
  email: String!
  created_at: DateTime
  updated_at: DateTime
  posts: [Post!]
}

# Queries
type Query {
  user(id: ID!): User
  users(page: Int, limit: Int): [User!]!
}

# Mutations
type Mutation {
  createUser(input: CreateUserInput!): User
  updateUser(id: ID!, input: UpdateUserInput!): User
  deleteUser(id: ID!): Boolean
}

# Input types
input CreateUserInput {
  name: String!
  email: String!
  password: String!
}

input UpdateUserInput {
  name: String
  email: String
  password: String
}`

</script>