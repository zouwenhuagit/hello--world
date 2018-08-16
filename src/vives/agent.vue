<template>
<div>
    <Header></Header>
    <Tab></Tab>
        <!-- banner start -->
    <div class="swiper-container" id="newoff">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="../assets/contimg/banner06.jpg" alt="">
            </div>
        </div>
    </div>
    <!-- banner end -->

    <!-- main start -->
    <div class="agent_tl">
        <div class="agent_bx">
            <div class="agen_box">
                <div class="agent_l wow slideInLeft">
                    <p>
                        代理优势
                    </p>
                    <ul>
                        <li>即时返佣 0 延迟</li>
                        <li>极具竞争力的定制佣金制度</li>
                        <li> 合作前及合作后提供培训与服务</li>
                        <li>客户经理提供一对一专业业务支持</li>
                        <li>每天 24 小时的客户支持</li>
                        <li> 免费的研究和分析工具</li>
                        <li>丰富的交易工具</li>
                    </ul>
                </div>
                <div class="agent_r">
                    <ul>
                        <li class="wow bounce">
                            <p>01</p>
                            <p>合作前市场分析与考察</p>
                            <p>市场前景分析
                                <br>经营和利润预测
                                <br>公司业务能力和服务考察</p>
                        </li>
                        <li class="wow shake">
                            <p>02</p>
                            <p>缔结合作关系</p>
                            <p>双方签约培训介绍经纪商
                                <br>熟悉业务操作流程
                                <br>市场开拓准备
                            </p>
                        </li>
                        <li class="wow bounce">
                            <p>03</p>
                            <p>合作前期培训与服务</p>
                            <p>介绍经纪商智能化管理系
                                <br>统使用 业务流程 讨论与
                                <br>制定介绍经纪商市 场拓展方案
                            </p>
                        </li>
                        <li class="wow shake">
                            <p>04</p>
                            <p>介绍客户及提供指导</p>
                            <p>介绍客户并指导开户入金和出金
                                <br>流程为客户提供指导和服务
                                <br> 为客户提供交易系统技术支持</p>
                        </li>
                        <li class="wow bounce">
                            <p>05</p>
                            <p>持续的市场和培训支持</p>
                            <p>多元化的市场推广活动
                                <br> 持续的介绍经纪商经营培训
                                <br> 指导 24小时顾问式服务
                            </p>
                        </li>
                        <li class="wow shake">
                            <p>06</p>
                            <p>合作后期培训与服务</p>
                            <p>经营业绩显著提升
                                <br> 公司业务良性发展
                                <br>促进更紧密的合作关系
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>


    <div class="emi_tl">
        <img src="../assets/contimg/bg03.jpg" alt="">
        <div class="emi_bx">
            <div class="min_box wow bounceInUp">
                <p>如有意初商，欢迎填写以下资料，我们会有专人回复。</p>
                <form action="">
                    <ul>
                        <li>
                            <input type="text" placeholder="姓名">
                        </li>
                        <li>
                            <input type="text" placeholder="公司名称">
                        </li>
                        <li>
                            <input type="text" placeholder="地址(包括国家或城市)">
                        </li>
                        <li>
                            <input type="text" placeholder="电邮">
                        </li>
                        <li>
                            <input type="text" placeholder="QQ号">
                        </li>
                        <li>
                            <input type="text" placeholder="移动电话">
                        </li>
                        <li>
                            <textarea placeholder="附言"></textarea>

                        </li>
                    </ul>

                    <div class="go_top">
                        <a class="foot">继续申请</a>
                    </div>
                </form>
            </div>


        </div>
    </div>
    <!-- main end -->
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

