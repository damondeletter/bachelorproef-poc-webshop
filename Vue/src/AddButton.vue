<template>
  <button class="btn-buy" @click="addToCart(params)">Add to cart</button>
</template>

<script>
export default {
  name: "add-button",
  props: ["addToCart", "params"],
}
</script>

<style>
</style>