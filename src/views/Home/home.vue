<template>
  
  <div>
       
        <div class="leftnav">
   <ul>
      <!-- <router-link :to="'/post/'+item.id" tag="li" v-for="(item, index) in list" :key="index"  class="item_li" > -->
      <li v-for="(item,index) in list" :key="index"  @click="toggle_tab(leftone)"> {{item.name}} </li>
       <!-- <li @click="toggle_tab('leftone')">森工时政</li>
       <li @click="toggle_tab('lefttwo')">公告通知</li>
       <li @click="toggle_tab('leftthree')">林区要闻</li>
       <li @click="toggle_tab('leftfour')">热点专题</li> -->
   </ul>
    <carousel1 :is="current_tab" keep-alive  ></carousel1>
        <!-- <div v-show="current_tab=='leftone'">
          森工时政
        </div>
         <div v-show="current_tab=='lefttwo'">
          公告通知
        </div>
         <div v-show="current_tab=='leftthree'">
          林区要闻
        </div>
         <div v-show="current_tab=='leftfour'">
          热点专题
        </div>
        <div v-show="current_tab=='swiper'">
          swiper
        </div> -->
    
   <!-- <button @click="showdia(false)">123456789</button> -->
    </div>
        <div class="rightnav">
 <ul>
       <li v-for="(item,index) in list2" :key="index"  @click="toggle_tabs(righttwo)"> {{item.name}} </li>
   </ul>
    <rightone :is="current_tabs" keep-alive ></rightone>
        </div>



            <div class="clearflot"></div>

   <div class="carousel2">
      <el-carousel :interval="5000" height="150px" arrow="always">
    <el-carousel-item v-for="item in 2" :key="item">
      <img src="" alt="" style="withd:100%,height:200px">
    </el-carousel-item>
  </el-carousel>
   </div>
   <div class="footer">
            <p>东京城林业局有限公司主办</p>
            <p>咨询监督电话：0453-7901262</p>
            <p>邮箱：djclyjbgs@163.com</p>
            <p>地址：黑龙江省宁安市东京城林业局有限公司</p>
            <p>黑ICP：14006276号-3</p>
        </div>
  
  </div>
    
 
</template>
<script>
import axios from 'axios'
import { mapState,mapMutations } from 'vuex';
import carousel1 from '../../components/carousel1.vue'
import leftone from '../../components/leftone.vue'
import lefttwo from '../../components/lefttwo.vue'
import leftthree from '../../components/leftthree.vue'
import leftfour from '../../components/leftfour.vue'
import rightone from '../../components/rightone.vue'
import righttwo from '../../components/righttwo.vue'
import rightthree from '../../components/rightthree.vue'
import rightfour from '../../components/rightfour.vue'
export default {
  data(){
      return{
          leftone:'leftone',
          lefttwo:'lefttwo',
          leftthree:"leftthree",
          leftfour:"leftfour",
        current_tab:'carousel1',
        rightone:'rightone',
        righttwo:'righttwo',
        rightthree:rightthree,
        rightfour:rightfour,
        current_tabs:'rightone',
        list:[],
        list2:[]
        // list1:['leftone','lefttwo','leftthree','leftfour']
      }
  },
   computed:{
      ...mapState(['home_info'])
    },
    watch:{
    home_info(n,o){
    this.list=n.left_nav
    this.list2=n.right_nav
    // console.log(n.right_nav);

    }
  },
  methods:{
    toggle_tab:function(tab){
      console.log(tab)
        this.current_tab=tab;
    },
  
  toggle_tabs:function(tabs){
        this.current_tabs=tabs;
    },
    
  },
  components:{
      leftone,lefttwo,leftthree,leftfour,
      rightone,righttwo,rightthree,rightfour,
      carousel1
  }
  
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
}

  .leftnav ul{
        float: left;
        margin-top:240px;
        background-color: #565657;
        height: 320px;
        width: 11%; 
        margin-right:10px;
       
    }
     .leftnav ul li {
         
        list-style: none;
        text-align: center;
        height: 75px;
        line-height: 75px;
        color: #fff;
        cursor: pointer;
    }
    .rightnav {
        margin-top: 220px;
        width: 44%;
        height: 40px;
        float: right;
        
       
    }
       .rightnav ul {
        height: 40px;
        background-color: #fff;
    }

    .rightnav ul li {
        display: inline-block;
        width: 24%;
        text-align: center;
        line-height: 40px;
        font-weight: 700;
    }
    .carousel2{
      margin-top: 30px;
    }
    .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
   
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
   .clearflot {
        clear: both;
        height: 0;
        overflow: hidden;
    }
        .footer {
        height: 50px;
        border-top: 1px solid #84ad9e;
        margin-top: 30px;
        text-align: center;


    }

    .footer p {
        display: inline-block;
        font-size: 15px;
        color: #505050;
        margin-right: 50px;

    }
    
</style>