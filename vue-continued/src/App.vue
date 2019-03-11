<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" active-class="active" exact>Home</router-link> |
      <router-link to="/module15">Module 15</router-link> |
      <router-link to="/module16/10">Module 16</router-link> |
      <router-link to="/module16/30">Module 16</router-link> |
      <router-link to="/user">User</router-link>
    </div>
    <transition name="slide" mode="out-in">
    <router-view></router-view>
    </transition>
  </div>
</template>

<style>
.slide-leave-active {
  transition: opacity 1s ease;
  opacity: 0;
  animation: slide-out 1s ease-out forwards;
}

.slide-leave{
  opacity: 1;
  transform: translateX(0);
}

.slide-enter-active{
  animation: slide-in 1s ease-out forwards;
}

@keyframes slide-out {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-30px);
  }
}

@keyframes slide-in {
  0% {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0);
  }
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
