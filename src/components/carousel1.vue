<template>
  <div class="one">
    <div class="carousel1">
      <el-carousel :interval="5000" height="320px" arrow="always">
        <el-carousel-item v-for="item in 3" :key="item"> </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  computed: {
    // ...mapState(["home_info"]),
  },
  data() {
    return {
      imgList:""
    };
  },
  mounted() {
    // // this.list = this.home_info.img_message1
    // // this.home_info.img_message1
    // console.log(123000000);

    // // const item = this.home_info.img_message1;
    // // for (let i = 0; index < item; index++) {
    // //   console.log(index[i].image);
    // // }
    // console.log(this.imgList);
  },
  computed:{
    ...mapState(['home_info'])
  },
  watch:{
    home_info(n,o){
      // this.imgList = n

    }
  }
};
</script>

<style  scoped>
.el-carousel__item {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  background-color: aqua;
}

.el-carousel__item:nth-child(2n) {
  background-color: #84ad9e;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #475669;
}

.one {
  border: 2px solid #84ad9e;
  float: left;
  margin-top: 240px;
  width: 42%;
  height: 316px;
}
</style>
