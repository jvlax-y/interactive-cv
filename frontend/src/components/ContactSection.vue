<script setup>
import SectionTitle from './SectionTitle.vue'
</script>

<template>
  <footer id="kontak" class="py-20 bg-pink-300 text-white">
    <div class="container mx-auto px-6 text-center">
      <SectionTitle title="Hubungi Saya" />

      <p class="text-xl text-gray-600 mb-8">
        Jangan ragu untuk terhubung atau bertanya 
      </p>

      <a
        href="mailto:maulidaluthfi@students.amikom.ac.id"
        class="bg-gray-400 text-white font-bold py-3 px-6 rounded-lg hover:bg-pink-500 transition-colors duration-300 inline-block mb-12"
      >
        Send Email
      </a>

      <div class="flex justify-center space-x-6 mb-8 text-lg">
        <a
          href="https://github.com/jvlax-y"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-700 hover:text-white transition-colors duration-300"
        >
         GitHub
        </a>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-700 hover:text-white transition-colors duration-300"
        >
          LinkedIn
        </a>
      </div>

      <p class="text-gray-500 text-sm">
        &copy; {{ new Date().getFullYear() }} Maulida. Dibuat dengan
        <span class="text-pink-500">❤</span> menggunakan Vue.js dan Tailwind CSS.
        Semua hak dilindungi.
      </p>
    </div>
  </footer>
</template>