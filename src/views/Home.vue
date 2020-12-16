<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <li v-for=" (item,index) in data_list.home_activities" :key="index" >
      <img :src="item.image" />
      <p>
        {{item.link}}
      </p>
    </li>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data(){
    return{
        data_list:[]
    }
  },
  mounted(){
    axios.get('http://www.demo.test/').then(res=>{
      console.log(res.data.data)
      this.data_list = res.data.data
    }).catch(err=>{
      console.log(err)
    })
  },
  methods:{

  }
}
</script>
