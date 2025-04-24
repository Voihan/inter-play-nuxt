<template>
    <div class="relative inline-block" ref="containerRef">
      <button ref="buttonRef" class="cursor-pointer px-3 py-1 font-medium text-sm">
        Products ▾
      </button>
  
      <div
        v-show="showDropdown"
        ref="menuRef"
        class="absolute top-full left-1/2 transform -translate-x-1/2 w-[1000px] bg-white shadow-lg border border-gray-200 z-50 p-6 grid grid-cols-4 gap-6 text-sm"
      >
        <!-- PLAYGROUNDS -->
        <div>
          <h3 class="font-semibold text-green-700 mb-2">PLAYGROUNDS</h3>
          <ul class="space-y-1">
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">LIMAKO</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">LUMO PLAY</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">INTEGRADO ♿</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">LINARIUM</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">ROBINIA</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">PARK</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">ROTO</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">AKRA</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">MONTO</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">TRANSPORTO</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">SENSORY BOARDS</a></li>
          </ul>
        </div>
  
        <!-- ELEMENTS -->
        <div>
          <ul class="space-y-1 pt-6">
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Roundabout</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Spinners</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Spring toys</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Hanging roundabouts</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Cableway</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Net structures</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Swings</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Seesaws</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Sandboxes</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Sensory boards</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Tunnels and tubes</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Slides</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Hammocks</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Children over 1 year</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Children over 3 years</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Children over 6 years</a></li>
          </ul>
        </div>
  
        <!-- TRAMPOLINES -->
        <div>
          <h3 class="font-semibold text-red-700 mb-2">TRAMPOLINES</h3>
          <ul class="space-y-1">
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Single trampolines</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Trampoline sets</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Inclusive trampolines ♿</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Trampolines for wet pour surfaces</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Trampolines with graphics on the mat</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Go to Trampoline Design Studio</a></li>
          </ul>
  
          <h3 class="font-semibold text-blue-700 mt-6 mb-2">SAFETY SURFACES</h3>
          <ul class="space-y-1">
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Safety slabs</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Path borders</a></li>
          </ul>
  
          <h3 class="font-semibold text-blue-700 mt-6 mb-2">SPORT EQUIPMENT</h3>
          <ul class="space-y-1">
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Sport ARENAS</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Sport system</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Fitness</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Street Workout</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Ninja Park</a></li>
          </ul>
        </div>
  
        <!-- URBAN FURNITURE -->
        <div>
          <h3 class="font-semibold text-yellow-700 mb-2">URBAN FURNITURE</h3>
          <ul class="space-y-1">
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Family TOPAZO</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Family ARMITA</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Family SAFIRO</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Family KRONO</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Family PERLO</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Family MALAKITO</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Family JAGO</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Family KRETO</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Family BERILIO</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Family KVARCO</a></li>
          </ul>
  
          <ul class="space-y-1 mt-4">
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Benches</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Tables</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Trash bins</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Bicycle racks</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Planters</a></li>
            <li><a class="block w-full px-2  hover:bg-gray-200" href="#">Bollards</a></li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
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
  // Handling cursor behavior when hovering and moving the cursor from and to the dropdown
  onMounted(() => {
    document.addEventListener('mousemove', handleMouseMove)
  })
  onBeforeUnmount(() => {
    document.removeEventListener('mousemove', handleMouseMove)
  })
  </script>
  