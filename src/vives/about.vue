<template>
<div>
    <Header></Header>
    <Tab></Tab>


  <div class="swiper-container" id="newoff">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="../assets/contimg/banner01.jpg" alt="">

            </div>
        </div>
    </div>

     <section>
        <img src="../assets/contimg/bg01.jpg" alt="">
        <div class="about_bx">
            <p class="wow bounceIn">
                全球在线投资者的合理选择
            </p>
            <p class="wow bounceInUp">
                MF金融控股是一家具备专业认证的金融服务供应商，致力为投资者提供方 便快捷的24小时在线保证金交易服务。投资者可通过我们的网上交易平台或电话语音交易系统，双向买卖外汇、黄金及白银等差价合约，全面把握创富先机。
            </p>
            <p class="wow bounceInLeft">
                MF金融的使命是为零售交易者提供最佳体验。从可通过移动设备接入的最先 进的客户门户和账户管理，5 天 24 小时的本土化支持服务，到交易平台和定价，MF金融始终致力于追求卓越。
            </p>
        </div>
        <div class="about_text2">
            <p class="wow bounceInRight">
                MF金融成立的目标便是为全球投资者提供、差价合约交易方面的服务。经美国期货协会(NFA)授权，并接受其监管。
            </p>
            <p class="wow bounceInLeft">
                本公司确保完全透明和诚信，并凭借市场领先的加密系统保证您账 户的隐私和安全。
            </p>
            <p class="wow bounceInRight">
                MF金融希望成为客户满意度方面的市场领先者，本公司经验丰富的长 期专家推动了这一 目标的实现，这些专家诚实正直、致力于服务客 户并且了解客户需求。
            </p>
            <p class="wow bounceInLeft">本公司投资最新科技，使审核与开户速度变得更快。本公司支付系统的目标在于成为提 供最快进出款服务的最新系统。</p>
            <p class="wow bounceInRight">本公司的使命是提供最佳体验和最受欢迎的零售交易系统—— MT4，并通过最新的桥接 技术连接 MT4 和顶级流动性提供商。</p>
            <p class="wow bounceInLeft">本公司的移动交易系统将提供一种简单方便的方法，以便客户能够 在移动中进行交 易，并立即对市场活动新闻和数据做出反应，从而 实现机会的最大化 。</p>
            <p class="wow bounceInRight">井然有序的客户门户使用方便，能够提供全方位的账户管理功能以 及 5 天 24 小时的支持服务。</p>
        </div>
    </section>
    <Footer></Footer>
</div>
  
</template>


<style>
     @import "../assets/css/index.css";
       @import "../assets/css/about.css";
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

