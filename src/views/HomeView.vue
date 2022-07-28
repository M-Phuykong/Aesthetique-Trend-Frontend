<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";

import ProductContainer from "@/components/ProductContainer.vue";
</script>

<template>
  <div class="container-fluid">

    <div class="row">
      <div class="col-md-2">
        <!-- Search Filter -->
        <HelloWorld />
      </div>
  
      <div class="col-md">
        <!-- Product Area -->
        <ProductContainer />
      </div>
    </div>
  </div>
</template>
