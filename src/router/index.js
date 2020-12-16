import Vue from 'vue'
import VueRouter from 'vue-router'
//import { component } from 'vue/types/umd'
//import Home from '../views/Home.vue'
import home from '../views/Home/home'
import jianjie from '../views/jianjie/jianjie'
import lingdao from '../views/lingdao/lingdao'
import xinwen from '../views/xinwen/xinwen'
import jianshe from '../views/jianshe/jianshe'
import jingying from '../views/jingying/jingying'
import lvyou from '../views/lvyou/lvyou'
import fanghuo from '../views/fanghuo/fanghuo'
import wenhua from '../views/wenhua/wenhua'
import zuzhi from '../views/zuzhi/zuzhi'
import news from '../views/news/news.vue'
import n59 from '../views/59/n59.vue'
import n60 from '../views/60/n60.vue'
import n50 from '../views/50/n50.vue'
import n49 from '../views/49/n49.vue'
import  ArticlePage from "../components/ArticlePage"
// import { component } from 'vue/types/umd'
Vue.use(VueRouter)

const routes = [
 {
   path:'/',
   component:home, 
 },
 {
   path:'/jianjie',
   component:jianjie,
 },
 {
  path:'/lingdao',
  component:lingdao, 
},
{
  path:'/xinwen',
  component:xinwen, 
},
{
  path:'/jianshe',
  component:jianshe, 
},
{
  path:'/jingying',
  component:jingying, 
},
{
  path:'/lvyou',
  component:lvyou, 
},
{
  path:'/fanghuo',
  component:fanghuo, 
},
{
  path:'/wenhua',
  component:wenhua, 
},
{
  path:'/zuzhi',
  component:zuzhi, 
},


{
  path:'/test',
component:()=>import('../views/Home.vue')

},
{
  path:'/news',
  component:news
},
{
  path:'/59',
  component:n59
},
{
  path:'/60',
  component:n60
},
{
  path:'/50',
  component:n50
},
{
  path:'/49',
  component:n49
},
{
  path:  '/post/:postID',
  props: true,
  name:  'post',
  component:  ArticlePage
  },

{
  path:'*',
  redirict:'/'
}

  
    
]

const router = new VueRouter({
  routes
})

export default router
