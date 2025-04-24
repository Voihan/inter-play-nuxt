<template>
  <!-- Header of the page -->
  <div class="bg-white z-0 relative">
      <nav class="text-sm text-gray-500 my-5 px-25 py-4 bg-gray-200">
      <NuxtLink to="/" class="hover:underline text-[#0070c0]">Home</NuxtLink>
      <span class="mx-2">›</span>
      <span class="text-[#0070c0] font-medium text-[#0070c0]">References</span>
    </nav>

    <!-- Seconnd header -->
    <div class="px-6 pb-4 mx-20 my-5">
      <h1 class="text-2xl font-semibold text-[#506d2f]">
        <span class="font-bold">Inter-Play</span> References
      </h1>
    </div>

    <!-- Map -->
    <div class="px-6 pb-12">
      <div id="map" class="rounded shadow mx-20 aspect-[1/1] relative z-0"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import L from 'leaflet';

onMounted(() => {
  const map = L.map('map').setView([52.0, 19.0], 4);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  const capitals = [
    ['Warsaw', 52.2297, 21.0122],
    ['Berlin', 52.52, 13.405],
    ['Paris', 48.8566, 2.3522],
    ['Rome', 41.9028, 12.4964],
    ['Madrid', 40.4168, -3.7038],
    ['Lisbon', 38.7169, -9.1399],
    ['Vienna', 48.2082, 16.3738],
    ['Brussels', 50.8503, 4.3517],
    ['Amsterdam', 52.3676, 4.9041],
    ['Copenhagen', 55.6761, 12.5683],
    ['Oslo', 59.9139, 10.7522],
    ['Stockholm', 59.3293, 18.0686],
    ['Helsinki', 60.1695, 24.9354],
    ['Reykjavik', 64.1466, -21.9426],
    ['Dublin', 53.3498, -6.2603],
    ['London', 51.5072, -0.1276],
    ['Bern', 46.9481, 7.4474],
    ['Prague', 50.0755, 14.4378],
    ['Bratislava', 48.1486, 17.1077],
    ['Ljubljana', 46.0569, 14.5058],
    ['Zagreb', 45.815, 15.9819],
    ['Sarajevo', 43.8563, 18.4131],
    ['Belgrade', 44.7866, 20.4489],
    ['Skopje', 41.9981, 21.4254],
    ['Athens', 37.9838, 23.7275],
    ['Sofia', 42.6977, 23.3219],
    ['Chisinau', 47.0105, 28.8638],
    ['Bucharest', 44.4268, 26.1025],
    ['Podgorica', 42.4304, 19.2594],
    ['Tirana', 41.3275, 19.8189],
    ['Kiev', 50.4501, 30.5234]
  ];

  capitals.forEach(([city, lat, lng]) => {
    L.marker([lat, lng]).addTo(map).bindPopup(city);
  });
});
</script>

<style>
@import "leaflet/dist/leaflet.css";

#map {
  z-index: 0; /* To not overlap other elements */
}
</style>
