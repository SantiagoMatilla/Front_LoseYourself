import { defineStore } from 'pinia';

export const useProductsStore = defineStore('products', {
    state: () => ({ 
        products: []
    }),
    getters: {
    },
    actions: {
      async fetchProducts() {
        await fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data =>{
            this.products = data
        })
      },
    },
  })