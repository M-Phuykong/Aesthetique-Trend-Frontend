<template>
  <div class="product_detail" v-if="loaded">
    <div class="product_container">
      <div class="row">
        <div class="col-md-6 p-4">

          <div class="carousel_container">
            <Carousel :settings='settings' :wrap-around="true">
              <Slide v-for="(img, ind) in data._images" :key="`${ind}`">
                <div class="image_container">
                  <img :src="img" />
                </div>
              </Slide>

              <template #addons>
                <Navigation />
                <Pagination />
              </template>
            </Carousel>
          </div>
        </div>
        <div class="col-auto p-4">
          <div class="product_info_container">
            <h2 class="product_title">{{ data._name }}</h2>
            <h3 class="product_price">
              ${{ convert_price(data._price) }} /
              {{ convert_to_KHR(data._price) }} KHR
            </h3>
            <h4 class="product_stock">{{ data._stock }} Left in Stock</h4>

            <!-- WIP -->
            <div class="add_to_cart_button_container">
              <button @click="addToCart" class="">Add to Cart</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

/* Planning */
.add_to_cart_button_container {
  background:#bef5a3
}

.product_detail {
  min-height: 100vh;
  background: var(--light-main-color);
  background: linear-gradient(
    180deg,
    var(--light-main-color) 30%,
    rgba(0, 255, 241, 0) 100%
  );
}

.row {
  justify-content: center;
  padding-top: 10vh;
  --bs-gutter-x: 0;
  /* padding-left: 10vw; */
  /* padding-right: 10vw; */
}

.col {
}

.carousel__item {
  min-height: 200px;
  width: 100%;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel:deep() .carousel__prev,
.carousel:deep() .carousel__next {
  background: transparent;
  height: 3em;
  width: 3em;

}

.carousel:deep() .carousel__prev svg,
.carousel:deep() .carousel__next svg {
    height: 100%;
    width: 100%;
}

.carousel__pagination:deep()
  .carousel__pagination-item
  .carousel__pagination-button {
  background-color: #C7C7C7;
}

.carousel__pagination:deep() .carousel__pagination-item .carousel__pagination-button--active {
  background-color: white;
}

.product_title,
.product_price,
.product_stock {
  font-family: var(--product-title-font);
  font-style: normal;
  font-weight: 800;
}

.product_price {
  color: white;
}

img {
  padding-left: 2rem;
  padding-right: 2rem;
  min-width: 100%;
  max-width: 50vh;
  max-height: 50vh;
  max-width: 50vh;
  border-radius: 10px;
  object-fit: cover;
}
</style>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { CartStore } from "@/stores/cart";


export default defineComponent({
  name: "ProductDetail",
  setup() {
    const cartStore = CartStore();

    return {cartStore}
  },
  components: {
    Pagination,
    Carousel,
    Slide,
    Navigation,
  },
  props: {
    id: { type: String, required: true },
  },
  data: () => ({
    // Carousel Settings
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    data: null,
    loaded: false,
  }),
  created() {
    this.validate(this.id);
  },
  methods: {
    validate: function (id: unknown) {
      axios("http://localhost:5000/api/products/" + id)
        .then((response) => {
          if (response.status == 200) {
            this.data = response.data;
            this.loaded = true;
          }
        })
        .catch((err) => {
          this.$router.push("/error");
        });
    },
    convert_price: function (price: number) {
      return price.toFixed(2);
    },
    convert_to_KHR: function(price: number) {
      var KHR_price = price * 4000;
      return KHR_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    addToCart: function(){
      console.log(this.data);

      this.cartStore.add(this.data);
    },
  }
});
</script>
