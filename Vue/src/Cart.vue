<template>
  <div class="container">
    <div v-if="cart.length == 0">
      <h3>I'm empty.. Maybe you can add some products?</h3>
    </div>
    <div v-else>
      <div class="row">
        <div class="col-md">
          <h3>My shopping cart</h3>
        </div>
        <div class="col-md">
          <h3>{{cart.reduce((acc, item) => acc + item.quantity, 0)}} product<span v-if="cart.reduce((acc, item) => acc + item.quantity, 0) > 1">s</span> </h3>
        </div>
      </div>
      <hr />
    </div>
    <div v-if="cart.length > 0">
      <div class="rowgap" v-for="item in cart" :key="item.name">
        <div class="row">
          <div class="col-md-4">
            <img :src="item.image" alt="image" width="300px" />
          </div>
          <div class="col-md-3">
            <b>Name:</b> {{item.name}}
          </div>
          <div class="col-md-3">
            <b>€{{item.price}}</b>
          </div>
          <div>
            <b>Amount:</b> {{item.quantity}}
          </div>
          <div>
            <remove-button :item="item" @removeFromCart="removeFromCart"></remove-button>
          </div>
        </div>
      </div>
     
    </div>
    <div v-if="cart.length != 0">
      <div class="subtotal">
       <div> <span><b>Subtotal:</b> €{{subtotal.toFixed(2)}}</span></div>
       <div class="korting" v-if="kortingsCodeGebruikt"><b>Discount (25%):</b> {{ kortingsBedrag.toFixed(2) }}</div>
        <div class="totaal"><b>Total:</b> €{{totaal.toFixed(2)}}</div>
        <div><extension-component name="checkout-button"><button class="buttonCheckout" @click="order"></button></extension-component></div>
      </div>
      <hr/>
      <div>USE A DISCOUNT CODE:
        <input
        :value="kortingscode"
        @input="event => kortingscode = event.target.value">
        <button class="buttonCode" @click="valideerCode">use code</button>
      </div>
      <div v-if="error" class="errorCode">This discount code is not valid!</div>
    </div>
    <div>
      <hr />
        <h4>Items that you might like...</h4>
        <extension-component name="recommended-products"></extension-component>
      </div>
  </div>
</template>

<script>
import RemoveButton from './RemoveButton.vue'
export default {
  name: 'Cart',
  props: ['cart'],
  components: {
    RemoveButton
  },
  data: function() {
    return {
      cartMock: this.cart,
      korting: 0.25,
      totaal: 0,
      subtotal: 0,
      kortingscode:"",
      kortingsCodeGebruikt: false,
      error: false,
      kortingsBedrag: 0,
    }
  },
  methods: {
    removeFromCart(item) {

    const cart = this.cart;
  
    const index = cart.findIndex((item2) => item2.product_id === item.product_id);
    if (index !== -1) {
      if (cart[index].quantity > 1) {
        
        this.cart[index].quantity--;
      } else {
        this.cart.splice(index, 1);
      }
    }

    this.cartSubtotal();
    this.applyDiscount();
  },
    applyDiscount: function() {
      if (this.kortingsCodeGebruikt) {
        this.totaal = this.subtotal - (this.subtotal * this.korting)
      } else {
        this.totaal = this.subtotal
      }
    },
    valideerCode: function() {
      if (this.kortingscode === "DAMON25") {
        this.kortingsCodeGebruikt = true
        this.error = false
        this.cartKorting()
        this.applyDiscount()
      } else {
        this.kortingsCodeGebruikt = false
        this.error = true
        this.cartSubtotal();
      }
    },
    cartKorting: function() {
      this.kortingsBedrag = this.cart.reduce((accumulator, item) => accumulator + (item.price * item.quantity * this.korting), 0)
    },
    cartSubtotal: function() {
      this.subtotal = this.cart.reduce((accumulator, item) => accumulator + (item.price * item.quantity), 0)
      this.totaal = this.subtotal
    },
    order: function() {
      this.$emit("order", this.cart)
    }
  },
  mounted () {
    this.cartSubtotal()
  }
}
</script>

<style>
.container {
  align-items: center;
  text-align: center;
}

.row {
  margin: 10px;
  align-items: center;
  margin: 0 auto;
}

.rowgap {
  margin: 10px;
}

.subtotal {
  text-align: right;
  margin-right: 20px;
  
}

.errorCode {
  color: red;
}

.korting {
  color: rgb(96, 154, 10);
}
</style>