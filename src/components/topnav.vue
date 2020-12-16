<template>
  <div class="topnav">
      <div class="head">
        <div class="headone">
           <img src="../assets/images/head.png" alt="" width="750px" height="90px">
        </div>
        <p></p>
       <div class="headtwo">
          <img src="../assets/images/LOGO.png" alt="" width="100px" height="100px">
       </div>
      
       <div class="headthree">
         <img src="../assets/images/net.png" alt="">
       </div>
       <div class="rightfont">
         <p>森林覆盖率459%</p>
         <p>旅业区总面积325%</p>
         <p>森林总储积量12546%</p>
       </div>
      </div>
     <ul id="top">
            <router-link :to="{path:'/'+item.href}" tag="li" v-for="(item,index) in list" :key="index">
            {{item.name}}                        
            </router-link>
         
        </ul>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState,mapMutations } from 'vuex';
export default {
    data(){
      return {
        
        list:[]
      }
    },
    computed:{
      ...mapState(['home_info'])
    },
    mounted(){
      
      // console.log(this.home_info.menu_name);
     
      
      // console
    },
  //   watch:{
  //   home_info(n,o){
     
  //     // console.log(n.nav_menu);
  //     this.list=n.nav_menu
  //     // console.log(n.nav_menu);

  //   }
  // }

};
</script>

<style scoped>
.head{
  position: relative;
  width: 100%;
  height: 200px;
   border-bottom: 8px solid #005fbc;
}
 .headone img{
   position: absolute;
   top: 30px;
 }
 .headtwo img{
   position: absolute;
   right:28%;
   top:55px;
 }
 .headthree img{
   position: absolute;
   top: 120px;
 }
 .rightfont{
   font-weight: 700;
   font-size: 20px;
   color:#397c5f;
   position: absolute;
   height: 50px;
   line-height: 50px;
   right: 5%;
   top: 30px;
 }
  .topnav {
        width: 100%;
        height: 80px;
       
        margin-top: 30px;
        margin-bottom: 10px;
    }

    .topnav li {
        display: inline-block;

        line-height: 80px;
        width: 9.5%;
        margin-right: 0.5%;
        color: #343639;
        font-size: 18px;
        font-weight: 700;
        cursor: pointer;
    }
</style>