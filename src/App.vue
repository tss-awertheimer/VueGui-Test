<template>
  <div id="app">
    <header>
      <a href="/" class="logo">
        <img alt="Vue logo" src="./assets/logo.png" />
      </a>
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/orders">Orders</router-link>
      </div>
    </header>
    <router-view />
  </div>
</template>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

img {
  width: 100%;
  height: auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #2a4b8e;
  padding: 1rem;
  margin-bottom: 20px;

  .logo {
    width: 200px;
    margin: auto 0;
  }

  #nav {
    a {
      font-weight: bold;
      color: #fff;
      text-decoration: none;
      margin-right: 1rem;

      &.router-link-exact-active {
        color: #fd7b24;
      }
    }
  }
}
</style>
