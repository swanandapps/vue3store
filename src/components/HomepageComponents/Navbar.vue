<template>
  <div>
    <div id="navbar">
      <div id="lhs">Home</div>

      <div id="rhs">
        <div>Account</div>
        <div id="cart">
          <q-icon @click="dialog = !dialog" name="shopping_cart" />

          <div id="cart_count">{{ CartStore.cartCount }}</div>

          <cartPopupComponent :dialogVisibility="dialog" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "../../store.js";
import cartPopupComponent from "../CartComponents/cartPopup.vue";

const CartStore = useCartStore();

const dialog = ref(false);
</script>

<style scoped>
#navbar {
  display: flex;
  height: 70px;
  align-items: center;
  font-size: 130%;
  border-bottom: solid 1px black;
}

#lhs {
  display: flex;
  flex: 3;
  align-items: center;
}

#rhs {
  display: flex;
  flex: 7;
  gap: 10%;
  align-items: center;
  justify-content: flex-end;
}
#cart {
  display: flex;
  align-items: center;
}
#cart_count {
  padding-bottom: 12px;
}
</style>
