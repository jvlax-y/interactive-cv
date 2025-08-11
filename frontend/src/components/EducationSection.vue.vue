<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const educationHistory = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/education');
    educationHistory.value = response.data;
  } catch (error) {
    console.error(error);

    // fallback dummy data
    educationHistory.value = [
      {
        id: 1,
        period: '2020 - 2023',
        institution: 'SMA Negeri 3 Klaten',
        major: 'IPA'
      },
      {
        id: 2,
        period: '2023 - present',
        institution: 'Universitas Amikom Yogyakarta',
        major: 'Informatika'
      }
    ];
  }
});
</script>

<template>
  <section id="pendidikan" class="py-20 bg-pink-50">
    <div class="container mx-auto px-6">
      <SectionTitle title="Riwayat Pendidikan" />
      <div class="relative">
        <!-- Garis vertikal -->
        <div class="absolute h-full border-r-2 border-pink-300 left-1/2 transform -translate-x-1/2"></div>

        <div
          v-for="(edu, index) in educationHistory"
          :key="edu.id"
          class="mb-10 flex justify-between items-center w-full"
        >
          <!-- Kiri -->
          <div v-if="index % 2 === 0" class="w-full flex">
            <div class="w-1/2 pr-8 text-right">
              <p class="font-medium text-pink-600">{{ edu.period }}</p>
              <h3 class="text-2xl font-bold text-gray-800 hover:text-pink-700 transition-colors duration-300">{{ edu.institution }}</h3>
              <p class="text-gray-600">{{ edu.major }}</p>
            </div>
            <div class="w-1/2 flex justify-start">
              <div class="w-4 h-4 bg-pink-500 rounded-full z-10 border-1 border-white"></div>
            </div>
          </div>

          <!-- Kanan -->
          <div v-else class="w-full flex">
            <div class="w-1/2 flex justify-end">
              <div class="w-4 h-4 bg-pink-500 rounded-full z-10 border-1 border-white"></div>
            </div>
            <div class="w-1/2 pl-8 text-left">
              <p class="font-medium text-pink-600">{{ edu.period }}</p>
              <h3 class="text-2xl font-bold text-gray-800 hover:text-pink-700 transition-colors duration-300">{{ edu.institution }}</h3>
              <p class="text-gray-600">{{ edu.major }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
