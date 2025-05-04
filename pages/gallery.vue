<template>
  <div class="bg-white">
    <!-- Breadcrumb navigation -->
    <nav aria-label="Breadcrumb" class="flex items-center text-sm text-[#0070c0] my-5 px-25 py-4 bg-gray-200">
      <ol class="flex space-x-2 list-none p-0 m-0">
        <li>
          <NuxtLink to="/" class="hover:underline" aria-label="Go to homepage">Home</NuxtLink>
        </li>
        <li aria-hidden="true">›</li>
        <li class="text-[#0070c0] font-medium" aria-current="page">Gallery</li>
      </ol>
    </nav>

    <!-- Page header and description -->
    <header class="px-25 pb-6">
      <h1 class="text-2xl font-semibold text-[#5c7f1e]">
        Inter-Play <span class="text-black">Gallery</span>
      </h1>
      <p class="text-sm text-gray-700 mt-2">
        You are in our photo gallery where you could find below our devices from final playgrounds already installed which we have in the offer.
      </p>
    </header>

    <!-- Brand gallery section -->
    <section
      v-for="brand in brands"
      :key="brand.id"
      class="mb-16 px-25"
      :aria-labelledby="`brand-${brand.id}-title`"
    >
      <!-- Brand logo -->
      <header class="text-left mb-4">
        <img :src="brand.logo" :alt="`${brand.name} brand logo`" class="h-8 mb-4" />
      </header>

      <!-- Main brand image -->
      <figure class="w-full mb-8 overflow-hidden rounded shadow relative h-[400px]">
        <img
          :src="brand.mainImage"
          :alt="`${brand.name} main showcase photo`"
          class="w-full h-full object-cover"
        />
        <figcaption class="sr-only">{{ brand.name }} main showcase</figcaption>
      </figure>

      <!-- Image grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <figure
          v-for="(item, index) in brand.gallery"
          :key="index"
          class="relative overflow-hidden border"
        >
          <img
            :src="item.image"
            :alt="`${item.title} - playground equipment`"
            class="w-full h-48 object-cover"
          />
          <figcaption class="absolute bottom-0 left-0 w-full bg-blue-700 text-white text-xs text-center py-1">
            {{ item.title }}
          </figcaption>
        </figure>
      </div>

      <!-- Load more photos button -->
      <div class="text-center">
        <button
          class="bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded text-sm"
          aria-label="Load more photos of {{ brand.name }}"
        >
          More photos
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO: Page metadata
useHead({
  title: 'Gallery | Inter-Play',
  meta: [
    {
      name: 'description',
      content: 'Photo gallery of installed playground equipment by Inter-Play. Discover our devices used on final playgrounds.'
    }
  ]
})

// Temporary placeholder data
const brands = [
  {
    id: 1,
    name: 'Limako',
    logo: '/limako-logo.png',
    mainImage: 'https://unsplash.it/1200/600?image=1025',
    gallery: [
      { image: 'https://loremflickr.com/400/300/playground?lock=1', title: 'DOMETO 1+1' },
      { image: 'https://loremflickr.com/400/300/playground?lock=2', title: 'BIRDO' },
      { image: 'https://loremflickr.com/400/300/playground?lock=3', title: 'DOMETO 4+1' },
      { image: 'https://loremflickr.com/400/300/playground?lock=4', title: 'VERGO' },
      { image: 'https://loremflickr.com/400/300/playground?lock=5', title: 'TURNADO' },
      { image: 'https://loremflickr.com/400/300/playground?lock=6', title: 'GLOBO' },
      { image: 'https://loremflickr.com/400/300/playground?lock=7', title: 'SIDI 2' },
      { image: 'https://loremflickr.com/400/300/playground?lock=8', title: 'SIDI 2' }
    ]
  },
  {
    id: 2,
    name: 'Integrado',
    logo: '/integrado-logo.png',
    mainImage: 'https://unsplash.it/1200/600?image=1035',
    gallery: [
      { image: 'https://loremflickr.com/400/300/playground?lock=9', title: 'ITEM 1' },
      { image: 'https://loremflickr.com/400/300/playground?lock=10', title: 'ITEM 2' },
      { image: 'https://loremflickr.com/400/300/playground?lock=11', title: 'ITEM 3' },
      { image: 'https://loremflickr.com/400/300/playground?lock=12', title: 'ITEM 4' }
    ]
  }
]
</script>
