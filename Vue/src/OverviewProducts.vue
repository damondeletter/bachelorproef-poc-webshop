<template>
  <div>
    <template v-if="cart === undefined">
      <p class="centered">Something went wrong, your cart is empty</p>
    </template>
    <template v-else>
      <div class="cart">
        <h2>Cart</h2>
        <div v-for="item in displayedItems" :key="item.id" class="cartitem">
          <p>{{ item.name }}</p>
          €{{ item.price }}
          <img :src="item.image" alt="productimage"/>
        </div>
        <br/>
        <button class="paginate" @click="currentPage -= 1" :disabled="currentPage === 0">&lt;</button>
        <button class="paginate" @click="currentPage += 1" :disabled="(currentPage + 1) * itemsPerPage >= cart.length">&gt;</button>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'overview-products',
  props: ['cart'],
  data() {
    return {
      currentPage: 0,
      itemsPerPage: 2
    }
  },
  computed: {
    displayedItems() {
      return this.cart.slice(this.currentPage * this.itemsPerPage, (this.currentPage + 1) * this.itemsPerPage)
    }
  }
}
</script>

<style>
.paginate {
    background-color: #6c63ff;
    color: #fff;
    align-items: center;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-top: 20px;
  }
  .paginate:disabled {
    background-color: #ada9ed;
    cursor: not-allowed;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  .cartitem {
    background-color: #d6d6d6;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  .cartitem img {
    mix-blend-mode: multiply;
    padding: 5px;
  }</style>