<template>
  <div>
      <div v-if="cartItems.length > 0">
             <div class="container">
      <div v-for="post in cartItems" :key="post.id" class="wrapper">
      <h4 class="title">Title : {{post.title.slice(0,10)}}</h4>
      <p>{{post.body.slice(0,100)}}</p>
          <p class="quantity">Quantity: {{post.quantity}}</p>
      <div class="button">
        <button class="btn" @click="removeFromCart(post)">Remove From Cart</button>
      </div>
    </div>
    </div>
      </div>
      <div v-else class="emptyCart">
          <h3 class="empty">Your Cart is Empty</h3>
      </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex"
export default {
  name:"Cart",
  computed: {
      ...mapGetters(["cartItems"])
  },
  methods: {
      removeFromCart(post) {
      this.$store.commit("removeFromCart",post)
    }
  },
}
</script>
<style scoped>
.empty {
    text-align:center;
     padding-top:50px;
}
.quantity {
    margin:10px 0 10px 0;
}
.container{
    padding-top:50px;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.title {
  margin:10px;
}
.wrapper {
    text-align:center;
  max-height:350px;
  margin:10px;
  padding:10px;
  width:200px;
  background:#eee;
}
.button {
    margin-top:5px;
  text-align:center;
  text-align:center;
}
.btn {
  padding:2px 10px;
}
</style>