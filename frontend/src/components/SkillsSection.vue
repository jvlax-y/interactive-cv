<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'

const categorizedSkills = ref({})

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/skills')
    groupByCategory(response.data)
  } catch (error) {
    console.error(error)
  }
})

function groupByCategory(skills) {
  const grouped = {}
  for (const skill of skills) {
    if (!grouped[skill.category]) {
      grouped[skill.category] = []
    }
    grouped[skill.category].push(skill)
  }
  categorizedSkills.value = grouped
}
</script>


<template>
  <section id="skill" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <SectionTitle title="Skills & Tools" />
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(group, category) in categorizedSkills"
          :key="category"
          class="bg-white rounded-xl shadow-lg p-6"
        >
          <h2 class="text-xl font-bold text-blue-700 mb-4 text-center">{{ category }}</h2>
          <ul class="space-y-2">
            <li
              v-for="skill in group"
              :key="skill.name"
              class="text-left text-gray-700 flex justify-between items-center"
            >
              <span class="font-semibold text-gray-800">{{ skill.name }}</span>
              <span class="text-sm text-gray-500">({{ skill.level }})</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>