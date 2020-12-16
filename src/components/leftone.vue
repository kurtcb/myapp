<template>
  <div class="one">
    <ul>
      <router-link :to="'/post/'+item.id" tag="li" v-for="(item, index) in list" :key="index"  class="item_li" >
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
import { mapMutations, mapState } from "vuex";
export default {
  
  name: "Home",
  components: {
    // HelloWorld
  },
  data() {
    return {
      list:[], 
    };
  },
  computed:{
    ...mapState(['home_info'])
  },
  mounted() {
      // this.list = this.home_info.sg_message
      // console.log(this.home_info.sg_message.post_title);
      // this.list2=this.home_info.sg_message.id
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
     watch:{
    home_info(n,o){
     
      console.log(n);
      this.list=n.left_nav
      // console.log(n.left_nav);
    }
    },
  methods: {
    // ...mapMutations(["setHomeInfo"]),

  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
ul {
  margin: 10px;
}
ul li {
  width: 100%;
  display: inline;
  list-style-type: none;
  height: 30px;
  line-height: 30px;
  text-align: right;
  float: right;
}
ul li a {
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

.one {
  border: 2px solid #84ad9e;
  float: left;
  margin-top: 240px;
  width: 42%;
  height: 316px;
  overflow-y: auto;
  overflow-x: hidden;
}
.item_li a {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
</style>