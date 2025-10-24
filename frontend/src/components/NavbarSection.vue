<script setup>
import { onMounted, ref } from 'vue'

const showNavbar = ref(false)

const scrollToSection = (sectionId) => {
  document.getElementById(sectionId)?.scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
  });
}

onMounted(() => {
  const handleScroll = () => {
    showNavbar.value = window.scrollY > 100;
  }
  
  window.addEventListener('scroll', handleScroll);
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      scrollToSection(targetId);
    });
  });
})
</script>

<template>
  <!-- HERO SECTION -->
  <section id="home" class="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-pink-50 relative">
    <div class="container mx-auto px-6 text-center">
      <h1 class="text-6xl font-bold text-gray-800 mb-4 animate-slide-in-right" style="animation-delay:200ms;">
        Welcome👋🏻
      </h1>
      <p class="text-2xl text-gray-600 mb-6 animate-slide-in-right" style="animation-delay:400ms;">
        I'm Maulida Luthfi, a Full-Stack Developer & UI/UX Designer
      </p>
      <p class="text-lg text-gray-500 mb-12 animate-slide-in-right" style="animation-delay:600ms;">
        Creating beautiful & functional digital experiences
      </p>
      
      <!-- BUTTON CTA -->
      <div class="flex gap-4 justify-center animate-slide-in-left" style="animation-delay:800ms;">
        <button 
          @click="scrollToSection('proyek')" 
          class="bg-pink-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-pink-600 hover:scale-105 transition-all duration-300 shadow-lg"
        >
          View My Work
        </button>
        <button 
          @click="scrollToSection('kontak')" 
          class="bg-white text-pink-500 border-2 border-pink-500 font-bold py-3 px-8 rounded-lg hover:bg-pink-50 hover:scale-105 transition-all duration-300"
        >
          Contact Me
        </button>
      </div>
    </div>
    
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" @click="scrollToSection('profil')">
      <div class="flex flex-col items-center text-gray-600 hover:text-pink-500 transition-colors">
        <span class="text-sm mb-2 font-medium">Scroll Down</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </section>

  <header 
    class="bg-white/95 backdrop-blur-sm shadow-md fixed top-0 w-full z-50 transition-transform duration-300"
    :class="showNavbar ? 'translate-y-0' : '-translate-y-full'"
  >
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="text-2xl font-bold text-pink-600">Portofolio</div>
      <ul class="flex space-x-6">
        <li>
          <a href="#profil" class="text-gray-700 hover:text-pink-500 font-medium transform hover:-translate-y-0.5 transition-all duration-300">
            About
          </a>
        </li>
        <li>
          <a href="#pendidikan" class="text-gray-700 hover:text-pink-500 font-medium transform hover:-translate-y-0.5 transition-all duration-300">
            Education
          </a>
        </li>
        <li>
          <a href="#skill" class="text-gray-700 hover:text-pink-500 font-medium transform hover:-translate-y-0.5 transition-all duration-300">
            Skills
          </a>
        </li>
        <li>
          <a href="#proyek" class="text-gray-700 hover:text-pink-500 font-medium transform hover:-translate-y-0.5 transition-all duration-300">
            Projects
          </a>
        </li>
        <li>
          <a href="#kontak" class="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors duration-300">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
@keyframes slide-in-right {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in-right {
  animation: slide-in-right 0.8s ease-out forwards;
  opacity: 0;
}

.animate-slide-in-left {
  animation: slide-in-left 0.8s ease-out forwards;
  opacity: 0;
}

</style>