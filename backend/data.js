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
    title: 'Aplikasi Edukasi AmbisCamp',
    image: 'https://via.placeholder.com/500x300?text=AmbisCamp',
    description: 'Platform edukasi dengan sistem quest dan leaderboard.',
    tech: ['Vue.js', 'Tailwind', 'Figma'],
    link: '#'
  },
  {
    title: 'Portfolio Website',
    image: 'https://via.placeholder.com/500x300?text=Portfolio',
    description: 'Website pribadi untuk showcase desain dan proyek.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: '#'
  }
];
module.exports = { educationHistory, skills, projects };