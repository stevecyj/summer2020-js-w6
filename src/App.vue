<template>
  <div id="app">
    <loading :active.sync="isLoading"></loading>
    <div id="nav">
      <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
      <router-link to="/products">產品列表</router-link> |
      <router-link to="/cart">購物車</router-link> |
      <router-link to="/admin/products">後台產品列表</router-link>
    </div>
    <hr />
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  mounted() {
    // this.isLoading = true;
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 3000);
    // this.isLoading = true;
    // console.log(process.env.VUE_APP_APIPATH);
    // this.$http.get(`${process.env.VUE_APP_APIPATH}`).then((res) => {
    //   this.isLoading = false;
    //   console.log(res);
    // });
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
