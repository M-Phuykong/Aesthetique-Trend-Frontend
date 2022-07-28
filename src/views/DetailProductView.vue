<script setup lang="ts">
import ProductDetail from '@/components/ProductDetail.vue';
</script>

<template>

    <ProductDetail :id="this.$route.params.productID"></ProductDetail>

</template>

<style>
@media (min-width: 1024px) {
    .product {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>


