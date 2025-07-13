<script setup>
import { ref, onMounted } from 'vue'
import SectionTitle from './SectionTitle.vue'

const categorizedSkills = ref({})

onMounted(() => {
  categorizedSkills.value = {
  'Framework / Library': [
      {
        name: 'Vue.js',
        level: '80%',
        percentage: 80,
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg'
      },
      {
        name: 'Tailwind CSS',
        level: '80%',
        percentage: 80,
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
      }
    ],
    'Bahasa': [
      {
        name: 'JavaScript',
        level: '90%',
        percentage: 90,
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
      },
      {
        name: 'HTML5 & CSS3',
        level: 'Mahir',
        percentage: 100,
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'
      }
    ],
    'Desain / UI-UX': [
      {
        name: 'Figma',
        level: 'Mahir',
        percentage: 100,
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg'
      },
      {
        name: 'UI/UX Design',
        level: '90%',
        percentage: 90,
        icon: 'https://cdn-icons-png.flaticon.com/512/3192/3192555.png' // pakai flaticon untuk UI/UX
      }
    ],
    'Tools': [
      {
        name: 'Git & GitHub',
        level: '90%',
        percentage: 90,
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'
      }
    ]
  }
})
</script>

<template>
  <section id="skill" class="py-20 bg-pink-50">
    <div class="container mx-auto px-6">
      <SectionTitle title="Skills & Tools" />
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(group, category) in categorizedSkills"
          :key="category"
          class="bg-white rounded-xl shadow-lg p-6 transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300"
        >
          <h2 class="text-xl font-bold text-pink-700 mb-6 text-center">{{ category }}</h2>
          <ul class="space-y-5">
            <li v-for="skill in group" :key="skill.name">
              <div class="flex items-center gap-3 mb-1">
                <img :src="skill.icon" alt="" class="w-6 h-6" />
                <span class="font-semibold text-gray-800">{{ skill.name }}</span>
                <span class="ml-auto text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full">
                  {{ skill.level }}
                </span>
              </div>
              <div class="w-full h-2 bg-pink-100 rounded-full overflow-hidden">
                <div
                  class="h-full bg-pink-500 transition-all duration-700"
                  :style="{ width: skill.percentage + '%' }"
                ></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>