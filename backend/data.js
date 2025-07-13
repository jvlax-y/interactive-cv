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
    title: 'AmbisCamp – Aplikasi Edukasi',
    image: '/porto1.jpg',
    description: 'Aplikasi edukasi dengan sistem quest...',
    tech: ['Figma'],
    link: '#'
  },
  {
    title: 'Joglo Media – Website Jasa Pembuatan Website',
    image: '/porto2.jpg',
    description: 'Website company profile untuk Joglo Media...',
    tech: ['Figma', 'Vue.js'],
    link: '#'
  },
  {
    title: 'AmiKost – UI/UX Aplikasi Kost',
    image: '/porto3.png',
    description: 'Desain aplikasi mobile...',
    tech: ['Figma'],
    link: '#'
  },
  {
    title: 'ReadLine – Aplikasi Buku Digital',
    image: '/porto4.jpg',
    description: 'UI untuk aplikasi baca buku digital...',
    tech: ['Figma'],
    link: '#'
  },
  {
    title: 'Maha Parfume – Website E-commerce Parfum',
    image: '/porto5.jpg',
    description: 'Website e-commerce parfum dengan fitur keranjang...',
    tech: ['Vite', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://mahaparfum-dhbdeyasgzhbg9ct.southeastasia-01.azurewebsites.net/'
  }
];

module.exports = { educationHistory, skills, projects };