import { onUnmounted } from 'vue'
import { CartStore } from '../stores/cart'

export const CART_STORAGE = 'CART_STORAGE'

export const usePersistCart = () => {
    const cartStore = CartStore()

    const unsub = cartStore.$subscribe(() => {
        localStorage.setItem(CART_STORAGE, JSON.stringify(cartStore.carts))
    })

    onUnmounted(() => {
        unsub()
    })
}