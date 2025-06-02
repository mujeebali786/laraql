<template>
    <div class="col-12 text-center q-pt-lg">
        <q-btn flat dense no-caps rounded class="q-px-sm q-py-none fs-12 bg-red-3 text-red-4 q-my-xs" label="Why LaraQL?"/>
    </div>
    <div class="q-mb-md col-12 libre fs-48 text-weight-bolder q-px-md text-center">
        <span class="text-pink">LaraQL</span> Features
    </div>
    <div class="col-12 col-md-4 flex col-sm-6 q-py-lg q-px-md relative-position" v-for="(feature, index) in features"
        :key="index">
        <q-card :class="feature.cardcolor">
            <div class="q-pa-lg">
                <div class="hw-80 opacity-1 absolute fixed-top-right  rounded-bl-full" :class="feature.class"></div>
                <div class="rounded-2xl inline-block q-pa-md q-mb-sm text-white rotate-3" :class="feature.bgcolor">
                    <q-icon size="md" :name="feature.icon" />
                </div>
                <div class="text-subtitle1 q-mb-xs text-weight-bold fs-22 q-py-sm">{{ feature.title }}</div>
                <div class="text-body2 q-mb-lg text-grey-7 fs-16">{{ feature.description }}</div>
                <q-item dense :class="feature.color" class="q-pa-none">
                    <q-item-section side>
                        <q-icon name="task_alt" :class="feature.color" />
                    </q-item-section>
                    <q-item-section>
                        {{ feature.item }}
                    </q-item-section>
                </q-item>
            </div>
            <div class="transition-bar" :class="feature.border"></div>
        </q-card>
    </div>
</template>

<script setup>

const features = [
    {
        icon: 'code',
        title: 'Automatic Schema Generation',
        description: 'Generate GraphQL schemas automatically from your Laravel Eloquent models.',
        class: 'bg-red',
        color: 'text-pink',
        item: 'Zero configuration required',
        border: 'bg-pink-3',
        bgcolor: 'bg-red',
        cardcolor: 'cardred'
    },
    {
        icon: 'fas fa-layer-group',
        title: 'Relationship Support',
        description: 'Automatically maps Eloquent relationships to GraphQL relationships.',
        class: 'bg-purple opacity-1',
        color: 'text-purple',
        item: 'Deeply integrated',
        border: 'bg-purple',
        bgcolor: 'bg-purple',
        bgcolor: 'bg-purple',
        cardcolor: 'cardpurple'
    },
    {
        icon: 'mdi-database',
        title: 'CRUD Operations',
        description: 'Generates queries and mutations for all CRUD operations on your models.',
        class: 'bg-orange opacity-1',
        color: 'text-orange',
        item: 'Flexible & powerful',
        border: 'bg-orange',
        bgcolor: 'bg-orange',
        bgcolor: 'bg-orange',
        cardcolor: 'cardorange'
    },
    {
        icon: 'settings',
        title: 'Customizable',
        description: 'Easily customize the generated schemas with annotations and more.',
        class: 'bg-blue opacity-1',
        color: 'text-blue',
        item: 'Highly customizable',
        border: 'bg-blue',
        bgcolor: 'bg-blue',
        bgcolor: 'bg-blue',
        cardcolor: 'cardblue'
    },
    {
        icon: 'img:/src/assets/icon1.svg',
        title: 'Authentication & Authorization',
        description: "Built-in support for Laravel's authentication and authorization.",
        class: 'bg-green opacity-1',
        color: 'text-green',
        item: 'Enterprise-ready',
        border: 'bg-green',
        bgcolor: 'bg-green',
        bgcolor: 'bg-green',
        cardcolor: 'cardgreen'
    },
    {
        icon: 'bolt',
        title: 'Performance Optimized',
        description: 'Efficient query resolution with automatic N+1 problem mitigation.',
        class: 'bg-accent opacity-1',
        color: 'text-accent',
        item: 'Production-ready',
        border: 'bg-accent',
        bgcolor: 'bg-accent',
        bgcolor: 'bg-accent',
        cardcolor: 'cardaccent'
    },
];


</script>

<style scoped>
.hw-80 {
    height: 80px;
    width: 80px;
}

.q-card {
    border-radius: .75rem !important;
    transition: box-shadow 0.2s ease;
}

.q-card:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-0.25rem);
    .rotate-3 {
        rotate: 6deg;
    }
}

.rounded-bl-full {
    border-bottom-left-radius: 9999px !important;
    border-top-right-radius: 1646px !important;
}

.rounded-2xl {
    border-radius: 1rem !important;
}

.p-6 {
    padding-top: 6px;
}

.transition-bar {
    height: 6px;
    width: 0%;
    transition: width 0.4s ease-in-out;
    border-bottom-left-radius: 2006px;
    border-bottom-right-radius: 2006px;
}

.q-card:hover .transition-bar {
    width: 100%;
}

.opacity-1 {
    opacity: .2;
}

.cardred:hover {
    background: linear-gradient(to bottom left,
    rgba(244, 63, 94, 0.2),
    rgba(220, 38, 38, 0.2),
    rgba(255, 255, 255, 0.2)) !important;
}

.cardpurple:hover {
    background: linear-gradient(to bottom left,
    rgba(168, 85, 247, 0.2),
    rgba(147, 51, 234, 0.2),
    rgba(255, 255, 255, 0.2));
}

.cardorange:hover {
    background: linear-gradient(to bottom left,
    rgba(245, 158, 11, 0.2),
    rgba(217, 119, 6, 0.2),
    rgba(255, 255, 255, 0.2)) !important;
}

.cardgreen:hover {
    background: linear-gradient(to bottom left,
    rgba(16, 185, 129, 0.2),
    rgba(5, 150, 105, 0.2),
    rgba(255, 255, 255, 0.2)) !important;
}

.cardblue:hover {
    background: linear-gradient(to bottom left,
    rgba(14, 165, 233, 0.2),
    rgba(2, 132, 199, 0.2),
    rgba(255, 255, 255, 0.2)) !important;
}

.cardaccent:hover {
    background: linear-gradient(to bottom left,
    rgba(217, 70, 239, 0.2),
    rgba(192, 38, 211, 0.2),
    rgba(255, 255, 255, 0.2)) !important;
}
</style>
