<template>
  <!-- col col-md-6 col-lg-4 col-xl-3 d-flex -->
  <div class="col col-md-6 col-lg-4 col-xl-3 d-flex">
    <div class="card" style="border: 1px solid black">
      <img class="img-fluid card-img-top" v-bind:src="img_src" alt="" />
      <div class="card-body">
        <h4 class="product_title">{{ product_title }}</h4>
        <h4 class="product_price">${{ product_price }}</h4>
      </div>
    </div>
  </div>
</template>

<style scoped>

.card {
  min-width: 100%;
  max-width: 20vw;
  min-height: 100%;
}

.card:hover {
  cursor: pointer;
}

.card-img-top {
  min-width: 100%;
  width: 100%;
  height: 16vw;
  object-fit: cover;
}

.card-body{
  padding: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product_title,
.product_price {
  padding: 2px;
}



/* Small Screen - Portrait Mode */
@media only screen and (max-device-width: 478px) and (orientation: portrait) {

  .card {
    min-height: 22vh;
  }

  .card-img-top {
      max-height: 20vh;
      height: 100%;
      object-fit: cover;
    }

    .card-body {
      flex: none;
    }
}

</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductSingle",
  props: {
    id: String,
    img_src: String,
    product_title: { type: String, required: true },
    product_price: [String, Number],
  },
});
</script>
