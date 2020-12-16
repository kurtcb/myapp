<template>
  <div class="two">
     <div id="content" v-html='html'>
       
     </div>
  </div>
</template>

<script>
import axios from 'axios'
import {  mapMutations,mapState } from 'vuex';
export default {
    data(){
        return{
            
            html:''
        }
    },
    computed:{
        ...mapState(['home_info'])
    },
    mounted(){
        this.html=this.home_info.gg_message[0].post_content
       const content=document.getElementById('content')
    }
};
</script>

<style scoped>
.gonggao{
    margin: 10px;
}
    .two{
      
      
           
           border: 2px solid #84ad9e;
        float: left;
        margin-top: 240px;
        width: 42%;
        height: 316px;
         overflow-y: auto;
        overflow-x: hidden;
    
    }
</style>
