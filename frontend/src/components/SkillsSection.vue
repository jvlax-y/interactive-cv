<script setup>
import { ref, onMounted } from 'vue'
import SectionTitle from './SectionTitle.vue'

const categorizedSkills = ref({})

onMounted(() => {
  categorizedSkills.value = {
    'Design & UI/UX': [
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg', experience: '2+ years' },
      { name: 'UI/UX Design', icon: 'https://cdn-icons-png.flaticon.com/512/3192/3192555.png', experience: '5+ projects' },
      { name: 'Prototyping', icon: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png', experience: 'Proficient' },
      { name: 'User Research', icon: 'https://cdn-icons-png.flaticon.com/512/3588/3588592.png', experience: 'Proficient' },
      { name: 'Canva', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg', experience: '3+ years' }
    ],
    'Front-End Development': [
      { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg', experience: '1+ years' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', experience: '1+ year' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', experience: '2+ years' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', experience: 'Current use' },
      { name: 'HTML5 & CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', experience: '3+ years' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', experience: '1+ year' },
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg', experience: 'Proficient' }
    ],
    'Back-End Development': [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', experience: '1+ year' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', experience: '1+ year' },
      { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg', experience: 'Learning' },
      { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg', experience: 'Learning' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', experience: '1+ year' }
    ],
    'Tools & Others': [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', experience: '2+ years' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', experience: '2+ years' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg', experience: 'Daily use' },
      { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vite/vite-original.svg', experience: 'Current use' },
      { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg', experience: 'Proficient' }
    ]
  }
})
</script>

<template>
  <section id="skill" class="py-20 bg-pink-50">
    <div class="container mx-auto px-6">
      <SectionTitle title="Skills & Technologies" />
      
      <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Comprehensive technical skills backed by real-world projects and hands-on experience 
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(group, category) in categorizedSkills"
          :key="category"
          class="bg-white rounded-xl shadow-lg p-6 transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300"
        >
          <h2 class="text-xl font-bold text-pink-700 mb-6 text-center border-b-2 border-pink-200 pb-3">
            {{ category }}
          </h2>
          <div class="space-y-4">
            <div 
              v-for="skill in group" 
              :key="skill.name"
              class="flex items-center gap-3 p-3 rounded-lg hover:bg-pink-50 transition-colors duration-200"
            >
              <img :src="skill.icon" alt="" class="w-8 h-8 flex-shrink-0" />
              <div class="flex-1">
                <div class="font-semibold text-gray-800">{{ skill.name }}</div>
                <div class="text-xs text-gray-500 mt-0.5">{{ skill.experience }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>