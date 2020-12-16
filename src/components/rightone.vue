<template>
  <div class="rightcontent">
        <ul>
       <li><a href="">wenzi文字文字新闻wenzi文字文字</a>12/09</li>
       <li><a href="">wenzi文字文字新闻</a>12/09</li>
       <li><a href="">wenzi文字文字新闻</a>12/09</li>
       <li><a href="">wenzi文字文字新闻</a>12/09</li>
       <li><a href="">wenzi文字文字新闻</a>12/09</li>
       <li><a href="">wenzi文字文字新闻</a>12/09</li>
       <li><a href="">wenzi文字文字新闻</a>12/09</li>
       <li><a href="">wenzi文字文字新闻</a>12/09</li>
      
        
       
     </ul>
  </div>
</template>

<script>
export default {
    
};
</script>

<style scoped>
   *{
  margin: 0;
  padding: 0;
}
     .rightcontent {
        margin-top:5px;
        width: 100%;
        float: right;
        height: 290px;
        border: 2px solid #84ad9e;
        overflow-y: auto;
        overflow-x: hidden;
        
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
    width: 500px;
     overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: left;
           
        color: #505050;
        line-height: 30px;
        height: 30px;
        text-decoration: none;
}
</style>