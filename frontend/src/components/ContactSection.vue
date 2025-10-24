<script setup>
const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/jvlax-y',
    icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
    color: 'hover:text-gray-900'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/maulida-luthfi-57ba6026b/',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    color: 'hover:text-blue-600'
  },
  {
    name: 'Email',
    url: 'mailto:maulidaluthfi@students.amikom.ac.id',
    icon: 'M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z',
    color: 'hover:text-pink-600'
  }
]
</script>

<template>
  <footer id="kontak" class="relative overflow-hidden bg-gradient-to-br from-pink-600 via-pink-500 to-pink-400 text-white">
    <!-- Decorative Background Shapes -->
    <div class="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
    
    <div class="relative z-10 container mx-auto px-6 py-20">
      <!-- Main Content -->
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">Let's Work Together!</h2>
        <p class="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
          Have a project in mind or just want to chat? I'd love to hear from you!
        </p>

        <!-- Primary CTA -->
        <a
          href="mailto:maulidaluthfi@students.amikom.ac.id"
          class="inline-block bg-white text-pink-600 font-bold py-4 px-8 rounded-full hover:bg-pink-50 hover:scale-105 transition-all duration-300 shadow-xl"
        >
          Send Me an Email
        </a>
      </div>

      <!-- Social Links with Icons -->
      <div class="flex justify-center items-center gap-6 mb-12">
        <a
          v-for="social in socials"
          :key="social.name"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          :class="social.color"
          class="group bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white transition-all duration-300 hover:scale-110"
          :title="social.name"
        >
          <svg 
            class="w-6 h-6 text-white group-hover:text-pink-600 transition-colors" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path :d="social.icon"></path>
          </svg>
        </a>
      </div>

      <!-- Divider -->
      <div class="border-t border-white/20 my-8"></div>

      <!-- Footer Bottom -->
      <div class="text-center">
        <p class="text-pink-100 text-sm mb-2">
          &copy; {{ new Date().getFullYear() }} Maulida Luthfi Hanifah. All rights reserved.
        </p>
        <p class="text-pink-200 text-xs flex items-center justify-center gap-2">
          <span>Built with</span>
          <span class="text-red-400 animate-pulse text-lg">❤️</span>
          <span>using</span>
          <span class="font-semibold">Vue.js</span>
          <span>&</span>
          <span class="font-semibold">Tailwind CSS</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Smooth hover transitions */
a {
  transition: all 0.3s ease;
}

/* Optional: Add subtle animation to decorative circles */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.absolute.rounded-full {
  animation: float 8s ease-in-out infinite;
}
</style>