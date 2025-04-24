<template>
  <div class="bg-white">
    <!-- Header -->
    <nav class="flex items-center text-sm text-[#0070c0] my-5 px-25 py-4 bg-gray-200">
      <NuxtLink to="/" class="hover:underline text-[#0070c0]">Home</NuxtLink>
      <span class="mx-2">›</span>
      <span class="text-[#0070c0] font-medium">Blog</span>

      <!-- Heading -->
      <div class="ml-auto pr-2">
        <h1 class="text-2xl font-semibold text-[#0070c0]">Blog</h1>
      </div>
    </nav>

    <!-- Subtitle -->
    <div class="text-center text-gray-700 text-sm mb-10 mx-35 px-4">
      Would you like to be among the first to read about any updates?
      It’s easier than you think – with our blog and other social media
      you will be informed about our offer all the time.
    </div>

    <!-- Post grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-25 pb-20">
      <div
        v-for="n in 9"
        :key="n"
        class="flex flex-col bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-lg"
      >
        <img
          :src="`https://loremflickr.com/600/400/playground?lock=${n}`"
          alt="Blog Image"
          class="w-full object-cover h-64"
        />

        <div class="p-5 flex flex-col h-full">
          <!-- Date -->
          <div class="text-gray-500 text-sm mb-1 flex items-center">
            2025-03-10
          </div>

          <!-- Heading -->
          <h2 class="text-blue-700 font-semibold text-lg hover:underline mb-2">
            Example blog title here
          </h2>

          <!-- Brief description -->
          <p class="text-gray-700 mb-4">
            Short intro text about the blog content. You can describe products, updates, or other info here.
          </p>

          <!-- Button learn more -->
          <button
            class="w-fit px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mt-auto"
          >
            Learn more
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
