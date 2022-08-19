import { defineStore } from "pinia";
import axios from "axios";

export const productStore = defineStore({
  id: "store",
  state: () => ({
    products: [],
  }),

  getters: {
    availableProducts(state) {
      return state.products.filter(
        (product: { _stock: number }) => product._stock > 0
      );
    },
  },

  actions: {
    async getProducts() {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        this.products = response.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
