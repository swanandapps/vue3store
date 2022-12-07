import { defineStore } from "pinia";
import { ref, computed } from "vue";
// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useCartStore = defineStore("cart", () => {
  // other options...
  const cart = ref([]);
  const cartCount = computed(() => cart.value.length);

  const cartTotal = computed(() =>
    //100, 200, 300

    cart.value.reduce((total, product) => {
      return Number(total) + Number(product.price);
    }, 0)
  );

  //actions are function which change state properties

  const addtoCart = (product) => {
    cart.value.push(product);
    console.log("cart.value:", cart.value);
  };

  const removefromCart = (id) => {
    cart.value = cart.value.filter((el) => {
      return el.id !== id;
    });
  };

  return { cartCount, addtoCart, cart, removefromCart, cartTotal };
});
