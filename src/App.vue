<template>
  <div id="app">
    <body>
      <topnav></topnav>

      <router-view></router-view>
    </body>
  </div>
</template>
<script>
import topnav from "./components/topnav.vue";
import img from "../../myapp/src/assets/images/home.png";
import axios from "axios";
import { mapState, mapMutations, mapActions } from "vuex";

import get from "../src/api/getarticle";


export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["home_info"]),
  },

  mounted() {
    // get.getarticle({id:69})
    this.a({ id: 69 });
    // console.log(...mapActions);
    // console.log(this.home_info);
    this.setHome();
  },
  methods: {
    ...mapActions({ a: "modules/getarticle" }),
    // ...mapMutations(["setHomeInfo"]),
    ...mapActions(["setHome"]),
  },

  components: {
    topnav,
  },
};
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
}

body {
  width: 1300px;
  min-height: 100%;
  margin: 0 auto;
}
#app {
  background-image: url(../../myapp/src/assets/images/home.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
}
</style>
