<template>
  <div id="app">
    <header>
      <a href="/" class="logo">
        <img alt="Vue logo" src="./assets/logo.png" />
      </a>
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </header>
    <router-view />
  </div>
</template>

<style lang="less">
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
  background: #2a4b8e;
  padding: 1rem;

  .logo {
    width: 200px;
    margin: auto 0;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #fff;
      text-decoration: none;
      margin-right: 1rem;

      &.router-link-exact-active {
        color: #97adbf;
      }
    }
  }
}
</style>
