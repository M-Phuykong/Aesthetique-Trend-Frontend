<template>
  <Header></Header>
  <RouterView />
  <!-- <Footer></Footer> -->
</template>

<style>
@import "@/assets/base.css";


</style>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { usePersistCart } from './composables/usePersistCart';

usePersistCart();

</script>