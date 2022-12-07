<template>
  <div id="products">
    <div
      @click="showProduct(product.id)"
      v-for="product in products"
      id="individual_product"
    >
      <img :src="product.imageUrl" alt="" />
      <p>{{ product.title }}</p>
      <p>{{ product.price }}</p>
    </div>
  </div>
</template>

<script setup>
// import productsData from "../../data/products.json";
import { ref, onMounted } from "vue";

import { useRouter } from "vue-router";

import { db, collection, getDocs } from "../../firebase.js";

const products = ref([]);

const router = useRouter();

//reading firestore data

onMounted(async () => {
  const result = await getDocs(collection(db, "vuestore"));
  result.forEach((doc) => {
    let product = doc.data();
    product.id = doc.id;
    console.log("product:", product);

    products.value.push(product);

    // doc.data() is never undefined for query doc snapshots
  });

  console.log("products:", products.value);
});

const showProduct = (id) => {
  console.log(id);
  //reroute it to /productdetails/xcsdjhvfwu23421

  router.push(`productdetails/${id}`);
};
</script>
<style scoped>
#products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 3%;
  grid-gap: 3%;
}

#products img {
  width: 100%;
}
</style>
