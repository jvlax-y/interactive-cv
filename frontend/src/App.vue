Code snippet
<script setup>
import { RouterView } from 'vue-router';
import background  from '../src/assets/pink.jpeg'; 

</script>
<template>
    <div
class="font-sans min-h-screen bg-cover bg-center bg-opacity-80"
    :style="{ backgroundImage: `url(${background})` }"
  >
<RouterView />
</div>
</template>