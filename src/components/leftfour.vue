<template>
  <div class="four">
       <ul>
        <router-link to="/news"  tag="li" v-for="(item, index) in list" :key="index"  class="item_li">
        <a :href="item.link">
          <span>{{ item.post_title }}</span>
          <span>{{ item.published_time }}</span>
        </a>
      </router-link>
        
       
     </ul>
  </div>
</template>

<script>
import axios from "axios";
import{mapMutations,mapState}from "vuex";

export default {
    data(){
      return{
        list:[]
      }
    },
    computed:{
      ...mapState(['home_info'])
    },
    mounted(){
      this.list=this.home_info.rd_message
    }

};
</script>

<style scoped>
  *{
  margin: 0;
  padding: 0;
}
ul{
  margin: 10px;
}
ul li{
  width: 100%;
  display: inline;
  list-style-type: none;
  height: 30px;
  line-height: 30px;
  text-align: right;
  float: right;
}
ul li a{
  float: left;
    width: 450px;
     overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: left;
           
        color: #505050;
        line-height: 30px;
        height: 30px;
        text-decoration: none;
}

    .four{
      
     
           border: 2px solid #84ad9e;
        float: left;
        margin-top: 240px;
        width: 42%;
        height: 316px;
         overflow-y: auto;
        overflow-x: hidden;
    
    }
</style>