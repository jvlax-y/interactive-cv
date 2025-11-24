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

    educationHistory.value = [
      {
        id: 1,
        period: '2020 - 2023',
        institution: 'SMA Negeri 3 Klaten',
        major: 'IPA',
        description: 'Natural Science program with focus on Mathematics and Physics'
      },
      {
        id: 2,
        period: '2023 - present',
        institution: 'Universitas Amikom Yogyakarta',
        major: 'Informatika',
        gpa: '3.74/4.00',
        achievements: [
          'KMI Expo 2025 participant',
          'Active in FOSSIL Organization',
          'Co-founder of Joglo Media Web Dev'
        ]
      }
    ];
  }
});
</script>

<template>
  <section id="pendidikan" class="py-20 bg-gradient-to-b from-white to-pink-50">
    <div class="container mx-auto px-6">
      <SectionTitle title="Education Journey" />
      
      <div class="max-w-4xl mx-auto relative">
        
        <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-200 via-pink-300 to-pink-200"></div>

        <!-- Timeline Items -->
        <div class="space-y-12">
          <div
            v-for="(edu, index) in educationHistory"
            :key="edu.id"
            class="relative"
          >
            <!-- Timeline Dot -->
            <div class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8">
              <div class="w-5 h-5 bg-pink-500 rounded-full border-4 border-white shadow-lg z-20 animate-pulse"></div>
            </div>

            <!-- Content Card -->
            <div 
              :class="index % 2 === 0 ? 'md:pr-[52%]' : 'md:pl-[52%]'"
              class="w-full"
            >
              <div 
                class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-pink-400 hover:scale-[1.02] group"
              >
                <!-- Period Badge -->
                <div class="inline-block bg-pink-100 text-pink-700 px-4 py-1 rounded-full text-sm font-semibold mb-3">
                  {{ edu.period }}
                </div>

                <!-- Institution -->
                <h3 class="text-2xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
                  {{ edu.institution }}
                </h3>

                <!-- Major -->
                <p class="text-lg text-gray-600 font-medium mb-3">
                  {{ edu.major }}
                </p>

                <!-- GPA -->
                <div v-if="edu.gpa" class="mb-3">
                  <span class="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-3 py-1 rounded-lg text-sm font-bold">
                    GPA: {{ edu.gpa }}
                  </span>
                </div>

                <!-- Description (if present) -->
                <p v-if="edu.description" class="text-gray-600 text-sm mb-3">
                  {{ edu.description }}
                </p>

                <!-- Achievements -->
                <div v-if="edu.achievements && edu.achievements.length > 0" class="mt-4 pt-4 border-t border-gray-100">
                  <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Achievements</p>
                  <ul class="space-y-2">
                    <li 
                      v-for="(achievement, idx) in edu.achievements" 
                      :key="idx"
                      class="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <svg class="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                      <span>{{ achievement }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- End Dot -->
        <div class="relative mt-8">
          <div class="absolute left-1/2 transform -translate-x-1/2">
            <div class="w-4 h-4 bg-pink-300 rounded-full border-4 border-white"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Mobile Responsive - Stack vertically */
@media (max-width: 768px) {
  .md\:pr-\[52\%\],
  .md\:pl-\[52\%\] {
    padding-left: 2rem !important;
    padding-right: 0 !important;
  }
  
  .absolute.left-1\/2 {
    left: 1rem;
  }
}
</style>