<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" active-class="active" exact>Home</router-link> |
      <router-link to="/module15">Module 15</router-link> |
      <router-link to="/module16/10">Module 16</router-link> |
      <router-link to="/module16/30">Module 16</router-link> |
      <router-link to="/user">User</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
