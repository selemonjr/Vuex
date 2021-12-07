import { createStore } from "vuex";
import axios from "axios";
function updateCartLocalStorage(cart) {
  localStorage.setItem("cart",JSON.stringify(cart))
}
export default createStore({
  state: {
    posts:[],
    cart:[],
    isLoading:false,
  },
  getters: {
    cartItems:state => {
      return state.cart;
    },
    cartTotal:state => {
      return state.cart.length
    }
  },
  mutations: {
   SET_POSTS(state,posts) {
     state.posts = posts;
   },
   SET_LOADING_FALSE(state){
     state.isLoading = false
   },
   SET_LOADING_TRUE(state){
     state.isLoading = true;
   },
   addToCart(state,post) {
     let item = state.cart.find(i => i.id === post.id);
     if(item){
       item.quantity++
     } else {
       state.cart.push({...post,quantity:1})
     }
     updateCartLocalStorage(state.cart)
   },
   removeFromCart(state,post) {
     let item = state.cart.find(i => i.id === post.id);
     if(item){
       if(item.quantity > 1) {
         item.quantity--
       } else {
        state.cart = state.cart.filter(i => i.id !== post.id)
     }
    }
    updateCartLocalStorage(state.cart)
   },
   updateCartFromLocalStorage(state){
     const cart = localStorage.getItem("cart");
     if(cart) {
       state.cart = JSON.parse(cart)
     }
   }
  },
  actions: {
    getPosts({commit}) {
      commit("SET_LOADING_TRUE")
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        commit("SET_POSTS",response.data)
        commit("SET_LOADING_FALSE")
      }).catch(error => {
        console.log(error)
      })
    }
  },
  modules: {},
});
