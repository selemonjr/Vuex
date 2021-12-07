<template>
  <div>
<div v-if="!loading">
      <div class="container">
      <div v-for="post in filteredList" :key="post.id" class="wrapper">
      <h4 class="title">Title : {{post.title.slice(0,10)}}</h4>
      <p>{{post.body.slice(0,100)}}</p>
      <div class="button">
        <button class="btn" @click="addToCart(post)">Add To Cart</button>
      </div>
    </div>
    </div>
    <div class="buttons">
  <button class="btns" :disabled="currentPage === 1" @click="changePage(-1)">Prev</button>
    <button class="btns" :disabled="currentPage === 4" @click="changePage(1)">Next</button>
</div>
</div>
<div v-else class="loading">
<p>Loading....</p>
</div>
  </div>
</template>
<script>
export default {
  name:"Home",
  data() {
    return {
      currentPage:1,
      perPage:8,
    }
  },
  methods: {
    addToCart(post) {
      this.$store.commit("addToCart",post)
    },
    changePage(num) {
      this.currentPage = this.currentPage + num;
    }
  },
  computed: {
    filteredList() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = this.currentPage * this.perPage;
      const result = this.$store.state.posts.slice(start,end)
      return result;
    },
    // posts() {
    //   return this.$store.state.posts
    // },
    loading() {
      return this.$store.state.isLoading;
    }
  },
  created() {
    return this.$store.dispatch("getPosts")
  },
}
</script>
<style scoped>
.loading {
   padding-top:200px;
   text-align:center;

}
.container {
  display:flex;
    justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding-top:50px;
}
.title {
  margin:10px;
}
.wrapper {
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
.buttons {
  text-align:center;
}
.btns {
  outline:none;
  border:none;
    padding:5px 10px;
      margin:15px;
  border-radius:10px;
}
.btns:disabled{
  background:#fff;
    outline:none;
  border:none;
    padding:5px 10px;
      margin:15px;
  border-radius:10px;
}
.btns:active {
  background:#ff0000;
      outline:none;
  border:none;
  color:#fff;
    padding:5px 10px;
      margin:5px;
  border-radius:10px;
}
</style>