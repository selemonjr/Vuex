<template>
<div>
    <nav :class="{'onScroll' : !view.topOfPage}">
        <div class="headerLogo">
            <h4><router-link to="/">Vuex</router-link></h4>
        </div>
        <div class="headerCart">
            <h4 class="cart"><router-link to="/cart">Cart <span>({{cartTotal}})</span></router-link></h4>
        </div>
    </nav>
</div>
</template>
<script>
export default {
    name:"Navigation",
    data() {
        return {
            view: {
                topOfPage:true,
            }
        }
    },
    beforeMount() {
        window.addEventListener("scroll",this.handleScroll)
    },
    methods: {
        handleScroll() {
             if(window.pageYOffset > 0) {
        if(this.view.topOfPage) {
          this.view.topOfPage = false;
        }
      } else {
        if(!this.view.topOfPage) {
          this.view.topOfPage = true;
        }
      }
    }
    },
    computed: {
        cartTotal() {
            return this.$store.getters.cartTotal
        }
    }
}
</script>
<style scoped>
nav {
    width:100%;
    padding:10px;
    height:10vh;
    background:#eee;
    position:fixed;
    display:flex;
    justify-content:space-between;
    align-items:center;
}
.onScroll {
  width:100%;
  height:10vh;
  background:red;
}
.onScroll a {
    color:#fff;
}
a {
    text-decoration:none;
    color:#000;
}
@media(max-width:768px) {
  nav,.onScroll {
    height:7vh;
  }
}
</style>