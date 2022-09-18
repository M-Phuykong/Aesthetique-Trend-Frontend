import { defineStore } from "pinia";
import { CART_STORAGE } from '../composables/usePersistCart';

export interface Purchase {
  productID: string;
  quantity: number;
}

// Record is like a dictionary
// We define "Purchase" as the generic for all "purchase item"
interface CartState {
  carts: Record<string, Purchase>;
}

export interface CartPreview {
  id: number;
  image: string;
  title: string;
  quantity: number;
  cost: number;
}

export const CartStore = defineStore({
  id: "cart",

  state: (): CartState => ({
    carts: JSON.parse(localStorage.getItem(CART_STORAGE) as string) ?? {},
  }),

  
  
  getters: {
    
    count(): number {
      return Object.keys(this.carts).reduce((acc, id) => {
        return acc + this.carts[id].quantity;
      }, 0);
    },


  },  
  
  actions: {

  add(product : any) {
      var productID = product._id;

      if (this.carts[productID]){
        this.carts[productID].quantity += 1;
      }
      else{
        this.carts[productID] = { 
          productID, 
          quantity: 1,
        }
      };
    },
    remove(productId: string) {
      if (!this.carts[productId]) {
        return;
      }

      this.carts[productId].quantity -= 1;

      if (this.carts[productId].quantity === 0) {
        delete this.carts[productId];
      }
    },

  },
});
