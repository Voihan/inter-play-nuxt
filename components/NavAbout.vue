<template>
    <div class="relative inline-block" ref="containerRef">
      <button ref="buttonRef" class="cursor-pointer px-3 py-1 font-medium text-sm">
        About us ▾
      </button>
  
      <div
        v-show="showDropdown"
        ref="menuRef"
        class="absolute top-full left-1/2 transform -translate-x-1/2 w-56 bg-white shadow-lg border border-gray-200 z-50 p-3 text-sm"
      >
        <ul class="space-y-2">
          <li><a href="#" class="hover:underline">About us</a></li>
          <li><a href="#" class="hover:underline">Social Responsibility (CSR)</a></li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  
  const showDropdown = ref(false)
  const containerRef = ref(null)
  const buttonRef = ref(null)
  const menuRef = ref(null)
  
  const handleMouseMove = (event) => {
    const button = buttonRef.value
    const menu = menuRef.value
    const insideButton = button?.contains(event.target)
    const insideMenu = menu?.contains(event.target)
  
    showDropdown.value = insideButton || insideMenu
  }
  
  // // Handling cursor behavior when hovering and moving the cursor from and to the dropdown
  onMounted(() => {
    document.addEventListener('mousemove', handleMouseMove)
  })
  onBeforeUnmount(() => {
    document.removeEventListener('mousemove', handleMouseMove)
  })
  </script>
  