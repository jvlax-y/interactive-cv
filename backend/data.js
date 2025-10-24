// backend/data.js
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
        title: 'Cafe Cilaxie – Jogja Cafe Finder',
        image: img1,
        description: 'Web app untuk menemukan cafe di Yogyakarta dengan filter kustomisasi dan peta interaktif.',
        tech: ['Vue.js', 'Node.js', 'MySQL', 'Tailwind CSS'],
        link: 'https://cafe-cilaxie.vercel.app/'
      },
      {
        title: 'Bahtera Creative – Portfolio Website',
        image: bahtera,
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

module.exports = { educationHistory, skills, projects };