<template>
  <div class="min-h-screen flex flex-col">
    <!-- Fixed Header -->
    <div class="sticky top-0 z-50">
      <MainHeader />
    </div>

    <!-- Page Content -->
    <div class="flex-1">
      <slot />
    </div>

    <!-- General footer -->
    <MainFooter />
  </div>
</template>

<script setup>

</script>
