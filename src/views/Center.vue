<template>
  <div class="about">
    <h1>This is an center page</h1>
  <div @click="handleBack">
      返回
  </div>
  </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    mounted(){

    },   
     methods:{
        handleBack(){
            this.$router.back();

            }
     }
}
</script>
<style scoped>

</style>
