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

const selectedProject = ref(null)

const openModal = (project) => {
  selectedProject.value = project
}

const closeModal = () => {
  selectedProject.value = null
}


onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/projects');
    projects.value = response.data;
  } catch (error) {
    console.error(error);

    projects.value = [
      {
        title: 'Jogja Cafe Finder',
        image: cafe,
        description: 'Website yang membantu pengguna menemukan berbagai cafe di Yogyakarta dengan cepat melalui sistem filter kustom seperti lokasi, jam buka, dan kategori ambience. Aplikasi ini juga dilengkapi peta interaktif sehingga pengguna dapat menavigasi lokasi dengan mudah dan memilih cafe sesuai preferensi.',
        tech: ['Vue.js', 'Node.js', 'MySQL', 'Tailwind CSS'],
        link: 'https://cafe-cilaxie.vercel.app/'
      },
      {
        title: 'Bahtera Creative – Portfolio Website',
        image: bahtera, 
        description: 'Sebuah portfolio management system untuk UMKM jasa desain logo. Seluruh tampilan UI/UX dirancang dari awal, termasuk struktur navigasi, visual identity, dan admin dashboard untuk pengelolaan project. Fokus pada aksesibilitas, konsistensi visual, dan pengalaman pengguna yang efisien.',
        tech: ['Figma', 'UI/UX Design', 'User Research'],
        link: 'https://www.bahteracreative.com/'
      },
      {
        title: 'Management System – APAR and location picket points',
        image: imgApar,
        description: 'Sistem manajemen lintas platform yang dikembangkan untuk mobile dan web, dilengkapi fitur pemindaian QR untuk validasi data dan role-based access control untuk keamanan yang lebih ketat. Dibangun menggunakan React dan Ionic sehingga UI tetap konsisten di berbagai perangkat.',
        tech: ['React', 'TypeScript', 'Ionic', 'Capacitor', 'Node.js'],
        link: '#'
      },
      {
        title: 'AmbisCamp – Aplikasi Edukasi',
        image: img1,
        description: 'Aplikasi edukasi dengan pendekatan gamifikasi, menghadirkan quest harian, sistem leaderboard, serta kelas live yang interaktif. Desain dibuat untuk siswa sekolah agar proses belajar terasa menyenangkan, runtut, dan bebas distraksi.',
        tech: ['Figma'],
        link: 'https://www.figma.com/proto/UP97XuIwLHCk2faHgQeQfi/broken-heart-emoji?node-id=0-1&t=nw47oqT669jcNAaI-1'
      },
      {
        title: 'Joglo Media – Website Jasa Pembuatan Website',
        image: img2,
        description: 'Website company profile untuk Joglo Media yang berfokus pada digitalisasi UMKM. Desain dibuat responsif dengan ilustrasi lokal, layout profesional, serta CTA yang jelas untuk meningkatkan konversi. Proyek menekankan branding yang kuat dan kemudahan akses informasi.',
        tech: ['Figma', 'vue.js'],
        link: 'https://joglomediaweb.com/'
      },
      {
        title: 'AmiKost – UI/UX Aplikasi Kost',
        image: img3,
        description: 'Desain UI/UX aplikasi mobile untuk pencarian dan pemesanan kamar kost. Fokus utama pada penyederhanaan user journey, mulai dari pencarian, pemilihan fasilitas, hingga proses booking. Visual dirancang agar nyaman dipakai harian oleh mahasiswa maupun pekerja.',
        tech: ['Figma'],
        link: '#'
      },
      {
        title: 'ReadLine – Aplikasi Buku Digital',
        image: img4,
        description: 'Desain antarmuka aplikasi baca buku digital dengan fitur discover, search, dan personal library. Menggunakan palet warna ungu pastel yang clean dan modern, cocok untuk pengguna yang senang membaca dalam waktu lama tanpa merasa overload secara visual.',
        tech: ['Figma'],
        link: '#'
      },
      {
        title: 'Maha Parfume – Website E-commerce Parfum',
        image: img5,
        description: 'Website e-commerce untuk brand parfum lokal yang menyediakan katalog produk, halaman detail parfum, fitur keranjang, dan sistem checkout. Dibangun dengan stack modern dan dirancang responsif agar dapat diakses dengan nyaman dari perangkat apa pun.',
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
          @click="openModal(project)"
          class="cursor-pointer bg-pink-100 rounded-xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300"
        >
          <img :src="project.image" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h3 class="font-bold text-lg">{{ project.title }}</h3>
            <p class="text-sm text-gray-600 line-clamp-3">{{ project.description }}</p>
          </div>
        </div>
      </div>

      <!-- MODAL DIPINDAH KE SINI -->
      <div 
        v-if="selectedProject" 
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      >
        <div class="bg-white w-full max-w-2xl rounded-2xl shadow-xl overflow-hidden relative">
          
          <button 
            @click="closeModal"
            class="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
          >
            &times;
          </button>

          <div class="p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">
              {{ selectedProject.title }}
            </h2>

            <img 
              :src="selectedProject.image" 
              class="w-full h-64 object-cover rounded-lg mb-4"
            />

            <p class="text-gray-700 mb-4 leading-relaxed">
              {{ selectedProject.description }}
            </p>

            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="tech in selectedProject.tech" 
                :key="tech" 
                class="bg-pink-200 text-pink-800 text-xs font-medium px-2.5 py-1 rounded-full"
              >
                {{ tech }}
              </span>
            </div>

            <a 
              :href="selectedProject.link"
              target="_blank"
              class="inline-block text-sm font-semibold text-pink-600 hover:underline"
            >
              Visit Project →
            </a>
          </div>
        </div>
      </div>
      <!-- END MODAL -->

    </div>
  </section>
</template>