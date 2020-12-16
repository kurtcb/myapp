<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link tag="div"   to="/center">center</router-link>
  <div @click="handleCenter">
    center
  </div>
  </div>
</template>
<script>
export default {
  methods:{
    handleCenter(){
      this.$router.push('/center')
    }
  }
}
</script>
r