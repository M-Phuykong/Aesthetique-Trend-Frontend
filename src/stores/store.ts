import { defineStore } from "pinia";
import axios from "axios";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface ProductState {
  items: Record<string, Product>;
  ids: number[];
}


export const ProductStore = defineStore({
  id: "store",
  state: () => ({
    products: {},
    ids: [],
  }),

  getters: {
    availableProducts(state) {
      return this.ids.map((i) => this.products[i]).filter((product) => product._stock > 0);
    },
  },

  actions: {
    async getProducts() {
      try {
        const response = await axios.get("http://localhost:5000/api/products");

        this.ids = response.data.map((product: any) => {
          this.products[product._id] = product;
          return product._id;
        });

      } catch (err) {
        console.log(err);
      }
    },
  },
});
