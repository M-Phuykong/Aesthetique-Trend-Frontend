<template>
  <div class="container-fluid" id="product_container">
    <div class="row text-center">
      <h3 class="p-3">Products</h3>
    </div>
    <!-- <div>{{products}}</div> -->
    <!-- row row-cols-1 row-cols-md-5 g-4 px-lg-5 px-md-3 py-2 -->
    <div class="row row-cols-1 row-cols-md-5 g-3 g-md-4 px-lg-5 px-md-3 py-2">
      <ProductSingle @click="loadItem(item)" v-for="(item, index) in products" :key="`${index}`" :id="item._id"
        :img_src="item._images[0]" :product_title="item._name" :product_price="item._price" />
    </div>
  </div>
</template>

<style>
</style>

<script lang="ts">
import { defineComponent } from "vue";
import ProductSingle from "./ProductSingle.vue";
import { ProductStore } from "@/stores/store";
import { CartStore } from "@/stores/cart";

export default defineComponent({
  name: "ProductContainer",
  components: {
    ProductSingle,
  },
  setup() {
    const store = ProductStore();
    const cart = CartStore();
    return { store, cart };
  },
  data() {
    // return {
    //   product_list: [],
    // };
  },
  computed: {
    products() {
      return this.store.availableProducts;
    },
  },
  created() {
    this.store.getProducts();
  },
  methods: {
    loadItem: function (item: any) {
      const id = item._id;
      this.$router.push("/product/" + id);
      // console.log(item._id)
    },
  },
});
</script>

<style scoped></style>
