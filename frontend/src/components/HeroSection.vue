<script setup>

const scrollToSection = (sectionId) => {
  document.getElementById(sectionId)?.scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
  });
}
</script>

<template>
  <section id="profil" class="container mx-auto px-6 py-20">
    <div class="flex flex-col md:flex-row items-center gap-12">
      <div class="md:w-1/2">
        <h1 class="text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-slide-in-left" style="animation-delay:200ms;">
          Halo, Saya 
          <span class="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
            Maulida Luthfi
          </span>
        </h1>
        
        <p class="text-lg text-gray-600 mb-8 leading-relaxed animate-slide-in-left" style="animation-delay: 400ms;">
          Informatics student at <span class="font-semibold text-gray-700">Amikom University Yogyakarta</span> with experience as a <span class="font-semibold text-gray-700">UI/UX Designer</span> and <span class="font-semibold text-gray-700">Full-Stack Developer</span>. 
          <br><br>
          Skilled in designing user-friendly interfaces and developing end-to-end web applications using <span class="text-pink-600 font-medium">Vue.js, React, Node.js, and Laravel</span>. 
          <br><br>
          Actively involved in campus organizations and startups, with a proven track record of securing <span class="font-semibold text-pink-600">P2MW funding</span> for an MSME digitalization project.
        </p>
        
        <div class="flex gap-4 animate-slide-in-left" style="animation-delay:600ms;">
          <button 
            @click="scrollToSection('kontak')" 
            class="bg-pink-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-pink-600 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Contact Me
          </button>
          
          <button 
            @click="scrollToSection('proyek')" 
            class="bg-white text-pink-500 border-2 border-pink-500 font-bold py-3 px-8 rounded-lg hover:bg-pink-50 hover:scale-105 transition-all duration-300"
          >
            View Projects
          </button>
        </div>
      </div>

      <!-- RIGHT SIDE - Profile Image -->
      <div class="md:w-1/2 flex justify-center animate-slide-in-right" style="animation-delay: 400ms;">
  <div class="relative">
   
    <div class="relative z-10 w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl border-2 border-white group">
      <img
        src="../assets/foto2.jpg"
        alt="Maulida Luthfi"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </div>
    
    <!-- Decorative Floating Elements -->
    <div class="absolute -z-10 -top-6 -left-6 w-72 h-72 bg-gradient-to-br from-pink-200 to-pink-300 rounded-3xl rotate-6 opacity-60 animate-float"></div>
    <div class="absolute -z-20 -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-pink-300 to-pink-400 rounded-3xl -rotate-12 opacity-40 animate-float-delayed"></div>
    
    <!-- Small Accent Dots -->
    <div class="absolute top-4 right-4 w-4 h-4 bg-pink-500 rounded-full animate-pulse"></div>
    <div class="absolute bottom-8 left-8 w-3 h-3 bg-pink-400 rounded-full animate-pulse" style="animation-delay: 0.5s;"></div>

  </div>
</div>
    </div>
  </section>
</template>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(6deg);
  }
  50% {
    transform: translateY(-20px) rotate(6deg);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translateY(0) rotate(-12deg);
  }
  50% {
    transform: translateY(-15px) rotate(-12deg);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 8s ease-in-out infinite;
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

.animate-slide-in-left {
  animation: slide-in-left 0.8s ease-out forwards;
  opacity: 0;
}

.animate-slide-in-right {
  animation: slide-in-right 0.8s ease-out forwards;
  opacity: 0;
}
</style>