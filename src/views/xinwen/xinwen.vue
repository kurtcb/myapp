<template>
  <div id="xinwen">
    <div class="xinwen">
          <ul>
       <li><a href="">wenzi文字文字新闻wenzi文字文字新闻wenzi文字文字新闻wenzi文字文字新闻wenzi文字文字新闻wenzi文字文字新闻wenzi文字文字新闻wenzi文字文字新闻</a>12/09</li>
       <li><a href="">wenzi文字文字新闻222</a>12/09</li>
       <li><a href="">wenzi文字文字新闻222</a>12/09</li>
       <li><a href="">wenzi文字文字新闻222</a>12/09</li>
       <li><a href="">wenzi文字文字新闻222</a>12/09</li>
       <li><a href="">wenzi文字文字新闻222</a>12/09</li>
       <li><a href="">wenzi文字文字新闻222</a>12/09</li>
       <li><a href="">wenzi文字文字新闻222</a>12/09</li>
      
        
       
     </ul>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
 *{
  margin: 0;
  padding: 0;
}
     .xinwen {
        margin-top:240px;
        width: 100%;
        
        float: right;
        height: 700px;
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
  height: 50px;
  line-height: 50px;
  text-align: right;
  float: right;
}
ul li a{
  float: left;
    width: 1100px;
     overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: left;
            font-size: 20px;
        color: #505050;
        
        text-decoration: none;
}
     </style>