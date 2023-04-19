<template>
  <button class="btn-buy" @click="removeFromCart(item)">X</button>
</template>

<script>
export default {
  name: "remove-button",
  props: ["remove-button","item"],
  methods: {
    removeFromCart(item) {
      this.$emit("removeFromCart", item);
      console.log("GELUKT")
    },
  },
};
</script>

<style>
.btn-buy {
  margin-left: 7px;
}
</style>