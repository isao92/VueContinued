<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Routing</h1>
        <hr>
        <p>Loaded ID: {{ id }}</p>
        <button @click="navigateToHome">Go to Home</button>
        <hr>
        <p>Using Path</p>
        <!-- <router-link tag="button" :to="'/user/' + $route.params.id + '/edit'">Edit User</router-link> -->
        <hr>
        <p>Using Object</p>
        <router-link tag="button" :to="{ name: 'userEdit', params: { id: $route.params.id }}">Edit User</router-link>

        <router-link
        tag="button"
        :to="{ name: 'userEdit', params: { id: $route.params.id }, query: { locale: 'en', q: 100 }}"
        >Edit User</router-link>
        <router-view></router-view>
        <router-view name="header-top"></router-view>
        <router-view name="header-bottom"></router-view>
        <p>bottom user</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: this.$route.params.id
    }
  },
  methods: {
    navigateToHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
</style>
