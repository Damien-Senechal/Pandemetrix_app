
<template>
  <header class="w-full bg-white px-8 py-4 flex items-center justify-between fixed z-10">
    <div class="text-xl font-bold text-gray-900">Pandemetrix</div>
    <nav class="flex space-x-4">
      <router-link to="/" class="text-gray-700 hover:text-blue-500">Accueil</router-link>
      <router-link to="/about" class="text-gray-700 hover:text-blue-500">À propos</router-link>
      <router-link to="/dashboard" class="text-gray-700 hover:text-blue-500">Dashboard</router-link>
      <router-link to="/datasheet" class="text-gray-700 hover:text-blue-500">Feuille de données</router-link>
      <router-link to="/etl" class="text-gray-700 hover:text-blue-500">ETL</router-link>
      <router-link to="/etl-manager" class="text-gray-700 hover:text-blue-500">Gestion ETL</router-link>
    </nav>
  </header>
</template>