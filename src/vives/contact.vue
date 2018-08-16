<template>
<div>
    <Header></Header>
    <Tab></Tab>
    <div class="swiper-container" id="newoff">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="../assets/contimg/banner07.jpg" alt="">
                <div class="banner_text" data-wow-delay="1s">
                    <p class="wow bounceInDown" style="color: #fff;" id="bor_last">联系我们</p>

                    <div class="banner_dizh wow bounceInLeft">
                        <p>
                            <img src="../assets/contimg/ico12.png" alt="">
                            <span>地址</span>
                        </p>
                        <p class="txt">
                            45 Wall Street,22th Floor,New York.
                        </p>
                    </div>

                    <div class="banner_nanber wow bounceInUp">
                        <p>
                            <img src="../assets/contimg/ico13.png" alt="">
                            <span>热线电话</span>
                        </p>
                        <p class="txt">
                            00852-54956034 周一至周五
                            <br>北京时间 9:00 a.m-5:00 p.m.
                        </p>
                    </div>


                    <div class="banner_emi wow flipInY">
                        <p>
                            <img src="../assets/contimg/ico14.png" alt="">
                            <span> 电邮</span>
                        </p>
                        <p class="txt">
                            一般信息：info@mfg-fx.com
                            <br>客服电邮：cs@mfg-fx.com
                            <br>争端/投诉：complaints@mfg-fx.com
                            <br> 合作关系：partners@mfg-fx.com
                        </p>
                    </div>



                </div>
            </div>
           
        </div>
    </div>
    <Footer></Footer>
</div>
  
</template>


<style>
     @import "../assets/css/index.css";
     
         .banner_dizh,
        .banner_nanber{
        width: 400px;
        border-bottom: 1px solid #ccc;
        padding-bottom: 20px;
        }
    
    .banner_dizh,
    .banner_nanber,
    .banner_emi {
        margin: 20px 0px;
    }
    
    .banner_dizh,
    .banner_nanber,
    .banner_emi>p {
        color: #fff;
        line-height: 30px;
    }
    
    #bor_last {
        position: relative;
    }
    
    #bor_last::after {
        content: "";
        clear: both;
        display: inline-block;
        position: absolute;
        left: 0px;
        bottom: 0px;
        width: 80px;
        border-bottom: 3px solid #fff;
    }
    
    .txt {
        margin-left: 25px;
        font-size: 14px;
    }
    
    @media screen and (max-width:1600px) {
        .banner_text {
            position: absolute;
            top: 0;
            left: 50%;
        }
    }
    
    @media screen and (max-width:1200px) {
        .banner_text>p:nth-child(1) {
            font-size: 25px;
        }
        .banner_dizh,
        .banner_nanber,
        .banner_emi {
            margin: 10px 0px;
        }
        .banner_text>p {
            padding: 15px 0px;
        }
    }
    
    @media screen and (max-width:1150px) {
        .banner_dizh,
        .banner_nanber {
            padding-bottom: 7px;
        }
    }
</style>



<script>
  
  import Header  from "../components/header";
  import Footer  from "../components/footer";
   import Tab  from "../components/tab";


   
export default {
 data:function() {
     return{
       
     }
  },
  components: {
    Header,
    Tab,
    Footer
  }
};
</script>

