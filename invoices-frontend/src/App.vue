<script setup lang="ts">
import TopHeader from './components/TopHeader.vue';
import FooterHeader from './components/FooterHeader.vue';

</script>

<template>
  <TopHeader />
  <div style="top: 48px; padding: 40px 48px 0px 48px; background-color: #FAFAFA; min-height: calc(100vh - 48px); width: 100%; display: flex; justify-content: center;" class="remove-padding">
    <div class="main-container">
      <RouterView />
    </div>
  </div>
  <FooterHeader />
</template>

<style scoped>

</style>
