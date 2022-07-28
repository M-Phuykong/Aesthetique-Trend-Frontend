<template>
  <div class="container-fluid">
    <div class="row text-center">
      <h3 class="p-3">Products</h3>
    </div>
    <!-- row row-cols-1 row-cols-md-5 g-4 px-lg-5 px-md-3 py-2 -->
    <div class="row row-cols-1 row-cols-md-5 g-3 g-md-4 px-lg-5 px-md-3 py-2">
      <ProductSingle
        @click="loadItem(item)"
        v-for="(item, index) in product_list"
        :key="`${index}`"
        :id="item._id"
        :img_src="item._images[0]"
        :product_title="item._name"
        :product_price="item._price"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductSingle from "./ProductSingle.vue";
import axios from "axios";

export default defineComponent({
  name: "ProductContainer",
  components: {
    ProductSingle,
  },
  data() {
    return {
      product_list: [],
    };
  },
  mounted() {
    this.getProduct();
  },
  methods: {
    getProduct: function () {
      axios("http://localhost:5000/api/products").then((response) => {
        if (response.status == 200) {
          this.product_list = response.data;
        }
      });
    },

    loadItem: function (item: any) {
      const id = item._id;
      this.$router.push("/product/" + id);
      // console.log(item._id)
    } 

  },
});
</script>

<style scoped></style>
