
const educationHistory = [
  { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Informatika' },
  { id: 2, period: '2020 - 2023', institution: 'SMA Negeri 3 Klaten', major: 'IPA' },
];
const skills = [
  { name: 'Vue.js', level: 'Mahir', category: 'Framework / Library' },
  { name: 'JavaScript', level: 'Mahir', category: 'Bahasa' },
  { name: 'Figma', level: 'Mahir', category: 'Desain / UI-UX' },
  { name: 'Tailwind CSS', level: 'Mahir', category: 'Framework / Library' },
  { name: 'UI/UX Design', level: 'Menengah', category: 'Desain / UI-UX' },
  { name: 'Git & GitHub', level: 'Mahir', category: 'Tools' },
  { name: 'HTML5 & CSS3', level: 'Mahir', category: 'Bahasa' }
];

const projects = [
  {
        title: 'Jogja Cafe Finder',
        image: 'Cafe.jpg',
        description: 'Website yang membantu pengguna menemukan berbagai cafe di Yogyakarta dengan cepat melalui sistem filter kustom seperti lokasi, jam buka, dan kategori ambience. Aplikasi ini juga dilengkapi peta interaktif sehingga pengguna dapat menavigasi lokasi dengan mudah dan memilih cafe sesuai preferensi.',
        tech: ['Vue.js', 'Node.js', 'MySQL', 'Tailwind CSS'],
        link: 'https://cafe-cilaxie.vercel.app/'
      },
      {
        title: 'Bahtera Creative – Portfolio Website',
        image: 'bahtera.png',
        description: 'Sebuah portfolio management system untuk UMKM jasa desain logo. Seluruh tampilan UI/UX dirancang dari awal, termasuk struktur navigasi, visual identity, dan admin dashboard untuk pengelolaan project. Fokus pada aksesibilitas, konsistensi visual, dan pengalaman pengguna yang efisien.',
        tech: ['Figma', 'UI/UX Design', 'User Research'],
        link: 'https://www.bahteracreative.com/'
      },
      {
        title: 'Management System – APAR and location picket points',
        image: 'AdminPAge.jpg',
        description: 'Sistem manajemen lintas platform yang dikembangkan dengan website, dilengkapi fitur pemindaian QR untuk validasi data dan role-based access control untuk keamanan yang lebih ketat. Dibangun menggunakan React dan Ionic sehingga UI tetap konsisten di berbagai perangkat.',
        tech: ['React', 'TypeScript', 'Ionic', 'Capacitor', 'Node.js'],
        link: 'https://github.com/jvlax-y/cekApar.git'
      },
      {
        title: 'AmbisCamp – Aplikasi Edukasi',
        image: 'porto1.jpg',
        description: 'Rancangan halaman muka aplikasi edukasi dengan pendekatan gamifikasi, menghadirkan quest harian, sistem leaderboard, serta kelas live yang interaktif. Desain dibuat untuk siswa sekolah agar proses belajar terasa menyenangkan, runtut, dan bebas distraksi.',
        tech: ['Figma'],
        link: 'https://www.figma.com/proto/UP97XuIwLHCk2faHgQeQfi/broken-heart-emoji?node-id=0-1&t=nw47oqT669jcNAaI-1'
      },
      {
        title: 'Joglo Media – Website Jasa Pembuatan Website',
        image: 'porto2.jpg',
        description: 'Website company profile untuk Joglo Media yang berfokus pada digitalisasi UMKM. Desain dibuat responsif dengan ilustrasi lokal, layout profesional, serta CTA yang jelas untuk meningkatkan konversi. Proyek menekankan branding yang kuat dan kemudahan akses informasi.',
        tech: ['Figma', 'vue.js'],
        link: 'https://joglomediaweb.com/'
      },
      {
        title: 'AmiKost – UI/UX Aplikasi Kost',
        image: 'porto3.png',
        description: 'Desain UI/UX aplikasi mobile untuk pencarian dan pemesanan kamar kost. Fokus utama pada penyederhanaan user journey, mulai dari pencarian, pemilihan fasilitas, hingga proses booking. Visual dirancang agar nyaman dipakai harian oleh mahasiswa maupun pekerja.',
        tech: ['Figma'],
        link: '#'
      },
      {
        title: 'ReadLine – Aplikasi Buku Digital',
        image: 'porto4.jpg',
        description: 'Desain antarmuka aplikasi baca buku digital dengan fitur discover, search, dan personal library. Menggunakan palet warna ungu pastel yang clean dan modern, cocok untuk pengguna yang senang membaca dalam waktu lama tanpa merasa overload secara visual.',
        tech: ['Figma'],
        link: 'https://www.figma.com/proto/t33YWXnTJW6nordRuAuc93/IMK?node-id=836-3309&p=f&t=fx9CwejFbtQZOExx-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1'
      },
      {
        title: 'Maha Parfume – Website E-commerce Parfum',
        image: 'porto5.jpg',
        description: 'Website e-commerce untuk brand parfum lokal yang menyediakan katalog produk, halaman detail parfum, fitur keranjang, dan sistem checkout. Dibangun dengan stack modern dan dirancang responsif agar dapat diakses dengan nyaman dari perangkat apa pun.',
        tech: ['Vite', 'Node.js', 'Express', 'MongoDB'],
        link: 'https://mahaparfum-dhbdeyasgzhbg9ct.southeastasia-01.azurewebsites.net/'
      }
];

module.exports = { educationHistory, skills, projects };