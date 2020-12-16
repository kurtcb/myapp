<template>
  <div class="one">
    <ul>
      <div v-for="(item, index) in list" :key="index" v-html="item.post_content" >
      </div>
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
      this.list = this.home_info.sg_message
      console.log(this.home_info.sg_message)
      console.log(this.home_info.sg_message[0].post_title); 
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
<style scoped>
div{
  margin-top: 500px;
}
</style>