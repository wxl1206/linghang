<template>
  <div id="nav">
    <router-link to="/">武科大助手</router-link> |
    <router-link to="/works">成员作品</router-link>
  </div>
  <router-view></router-view>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: #3C3E49;
  position: fixed;
  width: 100%;
  z-index: 100;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #87B43A;
}
</style>
