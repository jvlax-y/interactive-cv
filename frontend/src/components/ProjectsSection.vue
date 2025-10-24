```vue
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import img1 from '../assets/porto1.jpg';
import img2 from '../assets/porto2.jpg';
import img3 from '../assets/porto3.png';
import img4 from '../assets/porto4.jpg';
import img5 from '../assets/porto5.jpg';
import imgApar from '../assets/AdminPAge.jpg';
import bahtera from '../assets/bahtera.png';
import cafe from '../assets/Cafe.jpg';
import SectionTitle from './SectionTitle.vue';

const projects = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/projects');
    projects.value = response.data;
  } catch (error) {
    console.error(error);

    projects.value = [
      {
        title: 'Cafe Cilaxie – Jogja Cafe Finder',
        image: cafe, // atau buat img baru: imgCafe
        description: 'Web app untuk menemukan cafe di Yogyakarta dengan filter kustomisasi dan peta interaktif.',
        tech: ['Vue.js', 'Node.js', 'MySQL', 'Tailwind CSS'],
        link: 'https://cafe-cilaxie.vercel.app/'
      },
      {
        title: 'Bahtera Creative – Portfolio Website',
        image: bahtera, // atau buat img baru: imgBahtera
        description: 'Portfolio management system untuk UMKM logo design. Desain UI/UX dari nol dengan admin dashboard.',
        tech: ['Figma', 'UI/UX Design', 'User Research'],
        link: 'https://www.bahteracreative.com/'
      },
      {
        title: 'Management System – Mobile & Web',
        image: imgApar, // atau buat img baru: imgApar
        description: 'Cross-platform system dengan QR scanning dan role-based access control. Built dengan React + Ionic.',
        tech: ['React', 'TypeScript', 'Ionic', 'Capacitor', 'Node.js'],
        link: '#'
      },
      {
        title: 'AmbisCamp – Aplikasi Edukasi',
        image: img1,
        description: 'Aplikasi edukasi dengan sistem quest, leaderboard, dan kelas live interaktif. Dirancang untuk pengguna dari kalangan anak sekolah.',
        tech: ['Figma'],
        link: 'https://www.figma.com/proto/UP97XuIwLHCk2faHgQeQfi/broken-heart-emoji?node-id=0-1&t=nw47oqT669jcNAaI-1'
      },
      {
        title: 'Joglo Media – Website Jasa Pembuatan Website',
        image: img2,
        description: 'Website company profile untuk Joglo Media yang fokus pada digitalisasi UMKM. Desain responsif dengan ilustrasi lokal dan layout profesional.',
        tech: ['Figma', 'vue.js'],
        link: 'https://joglomediaweb.com/'
      },
      {
        title: 'AmiKost – UI/UX Aplikasi Kost',
        image: img3,
        description: 'Desain aplikasi mobile untuk pencarian dan pemesanan kost. Fokus pada user flow yang jelas dan interface yang nyaman digunakan.',
        tech: ['Figma'],
        link: '#'
      },
      {
        title: 'ReadLine – Aplikasi Buku Digital',
        image: img4,
        description: 'UI untuk aplikasi baca buku digital, dilengkapi fitur discover, add book, dan search. Desain clean dengan tone warna ungu pastel.',
        tech: ['Figma'],
        link: '#'
      },
      {
        title: 'Maha Parfume – Website E-commerce Parfum',
        image: img5,
        description: 'Website e-commerce parfum dengan fitur keranjang, detail produk, dan UI elegan. Dibangun dengan stack modern dan tampilan responsif.',
        tech: ['Vite', 'Node.js', 'Express', 'MongoDB'],
        link: 'https://mahaparfum-dhbdeyasgzhbg9ct.southeastasia-01.azurewebsites.net/'
      }
    ];
  }
});
</script>

<template>
  <section id="proyek" class="py-20 bg-pink-50">
    <div class="container mx-auto px-6">
      <SectionTitle title="Projects" />
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
        <div
          v-for="project in projects"
          :key="project.title"
          class="bg-pink-100 rounded-xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300"
        >
          <img
            :src="project.image"
            alt="Gambar Proyek"
            class="w-full h-56 object-cover"
          />
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-2">
              {{ project.title }}
            </h3>
            <p class="text-gray-600 mb-3 text-sm leading-relaxed">
              {{ project.description }}
            </p>
            <div class="mb-4 flex flex-wrap gap-2">
              <span
                v-for="t in project.tech"
                :key="t"
                class="bg-pink-200 text-pink-800 text-xs font-medium px-2.5 py-1 rounded-full"
              >
                {{ t }}
              </span>
            </div>
            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block text-sm font-semibold text-pink-600 hover:underline transition-colors duration-200"
            >
              Lihat Detail &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>