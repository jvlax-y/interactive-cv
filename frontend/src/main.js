import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import animateOnScroll from './directives/animateOnScroll'

// Jangan import MotionPlugin di sini
const app = createApp(App)
app.use(router)
app.directive('animateOnScroll', animateOnScroll)
app.mount('#app')