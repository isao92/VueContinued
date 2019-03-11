<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Routing</h1>
        <hr>
        <p>Loaded ID: {{ id }}</p>
        <button @click="navigateToHome">Go to Home</button>
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
  watch: {
    '$route' (to, from) {
      this.id = to.params.id
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
