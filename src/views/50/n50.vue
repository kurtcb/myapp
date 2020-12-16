<template>

    
<div id="news">
   <div class="news">
    <ul>
      <!-- <router-link to="/news"  tag="li" v-for="(item, index) in list" :key="index"  class="item_li"> -->
       
          <!-- <span>{{ messege_info.post_title }}</span> -->
          <!-- <div id="content" v-html="messege_info.post_content"></div> -->
          <div id="content" v-html="html">
          
          </div>
 
      <!-- </router-link> -->
    </ul>
  </div>
</div>
        
        
    
  
</template>

<script>
import axios from "axios";
import { mapMutations, mapState } from "vuex";
export default {
  name: "Home",
  components: {
    // HelloWorld
  },
  data() {
    return {
      messege_info:{},
      html:''
      
    };
  },
  computed:{
    ...mapState(['home_info'])
  },
  mounted() {
      this.list = this.home_info.sgmessage
      console.log(this.home_info.sgmessage[2],'-----------------------')
      this.html = this.home_info.sgmessage[2].post_content
      console.log(this.html)
      const content = document.getElementById('content')
      // content.innerHTML = this.messege_info.post_content
    // axios
    //   .get("http://www.demo.test/")
    //   .then((res) => {
    //     // console.log(res.data.data);
    //     // this.data_list = res.data.data;
    //     this.setHomeInfo(res.data.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  },
  methods: {
    // ...mapMutations(["setHomeInfo"]),

  },
};
</script>
<style  scoped>
#news{
        
        border: 1px solid  #84ad9e ;
        margin-top: 220px;
    }
    .news{
                margin: 50px;
        font-size: 20px;
    }
</style>