<template>
<div>
     <nav id="taps" class="">
        <div class="nav-bx">
            <a href="index.html"><img src="../assets/contimg/logo.png" alt=""></a>
            <ul id="btn">
                  <li v-for="item in navItem" ref="sun">
                    <router-link :to="item.url">
                        {{item.text}}
                    </router-link>
                 </li>
              
            </ul>
        </div>
    </nav>
      
   </div>


</template>

<style>
        

    

</style>

<script>
export default {
      data(){
    return {
      navItem: [
        { text: "首页", url: "/Home" },
        { text: "关于我们", url: "/About" },
        { text: "交易", url: "/Prodct" },
        { text: "市场分析 ", url: "/Markey" },
        { text: " 代理计划", url: "/Agent" },
        { text: " 软件下载", url: "/Download" },
        { text: " 联系我们", url: "/Contact" }
      ]
    }
  },
  mounted(){
      this.add();
  },
  methods:{
    add (){
        console.log(this.$refs)
    }
    

  }

}
</script>
