<template>
  <header>
    <!-- Top Banner -->
    <div class="z-40 bg-[#007cc0] text-white font-bold text-center text-sm py-2">
      <a href="#">
        See the New Playground Products in the Inter-Play Offer – click HERE
      </a>
    </div>

    <!-- Middle bar (hiden) -->
    <div
      class="transition-all duration-300 bg-white shadow px-4"
      :class="{ 'opacity-0 -translate-y-full h-0 overflow-hidden': hideMiddle }"
    >
      <div class="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
        <!-- Search -->
        <div class="flex border rounded my-3">
          <input
            type="text"
            placeholder="Search"
            class="px-2 py-1 outline-none"
          />
          <button class="bg-green-500 text-white px-3 py-1 rounded-r">
            Search
          </button>
        </div>

        <!-- Contact -->
        <span>Phone: <a class="hover:text-blue-600">+48 91 506 50 41</a></span>

        <!-- Social media -->
        <div class="flex items-center gap-3">
          <a href="https://cloud.inter-play.eu" target="_blank" title="Cloud">
            <img src="/images/cloud.png" alt="Cloud" class="w-[18px] h-[18px]" />
          </a>
          <a href="https://facebook.com" target="_blank" title="Facebook">
            <img src="/images/facebook.png" alt="Facebook" class="w-[18px] h-[18px]" />
          </a>
          <a href="https://instagram.com" target="_blank" title="Instagram">
            <img src="/images/instagram.png" alt="Instagram" class="w-[18px] h-[18px]" />
          </a>
          <a href="https://linkedin.com" target="_blank" title="LinkedIn">
            <img src="/images/linkedin.png" alt="LinkedIn" class="w-[18px] h-[18px]" />
          </a>
          <a href="https://youtube.com" target="_blank" title="YouTube">
            <img src="/images/yt.png" alt="YouTube" class="w-[18px] h-[18px]" />
          </a>
          <span>🇬🇧</span>
          <span>🇩🇪</span>
        </div>
      </div>
    </div>

    <!-- Bottom sticky nav -->
    <div class="sticky top-0 z-40 bg-white shadow-md">
      <div class="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <!-- Logo -->
        <div class="flex items-center gap-2">
          <img src="/logo.png" alt="Inter-Play Logo" class="h-10" />
        </div>

        <!-- Navigation -->
        <nav class="flex gap-6 text-sm font-medium items-center">
          <NuxtLink to="/" class="hover:underline" active-class="text-[#007cc0]">Home</NuxtLink>
          <NavProducts />
          <NuxtLink to="/references" class="hover:underline" active-class="text-[#007cc0]">References</NuxtLink>
          <NuxtLink to="/blog" class="hover:underline" active-class="text-[#007cc0]">Blog</NuxtLink>
          <a href="#" class="hover:underline">Projects</a>
          <NuxtLink to="/gallery" class="hover:underline" active-class="text-[#007cc0]">Gallery</NuxtLink>
          <a href="#" class="hover:underline">Video</a>
          <a href="#" class="hover:underline">Catalogue</a>
          <NavAbout />
          <a href="#" class="hover:underline">Contact</a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
const hideMiddle = ref(false)

const handleScroll = () => {
  hideMiddle.value = window.scrollY > 100
}

// Every time the scroll down/up is triggered, the handleScroll function is triggered.
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

// When a component leaves, disable scroll tracking
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
