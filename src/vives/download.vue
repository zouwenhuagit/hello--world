<template>
<div>
    <Header></Header>
    <Tab></Tab>
    <!-- banner start -->
    <div class="swiper-container" id="newoff">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="../assets/contimg/banner04.jpg" alt="">

            </div>
        </div>
    </div>
    <!-- banner end -->

    <!-- main start -->

    <div class="tab_nav">
        <div class="top">
            <span class="cunter_color">常规问题</span>
            <span>技术问题</span>
            <span>交易问题</span>
            <span>账户问题</span>
            <!-- <a href=""><span>账户出金</span></a>
                    <a href=""><span>账户入金</span></a> -->
        </div>

        <div class="top_box">
            <ul class="marleft-aut">
                <li>
                    <img src="../assets/contimg/ico11.png" alt="" style="height: 12px;margin-right: 5px"> MF金融提供的交易产品有哪些？
                    <div class="text_box" style="display: none;">
                        <p>MF金融为海外华人提供贵金属、原油/天然气、 指数等多元化产品在线交易服务，更多详情请查看产品中心。
                        </p>
                    </div>
                </li>

                <li>
                    <img src="../assets/contimg/ico11.png" alt="" style="height: 12px;margin-right: 5px"> 我的盈利需要缴税吗？
                    <div class="text_box" style="display: none;">
                        <p>需要依据不同国家的税法。如果您有这方面的疑问请咨询当地的税务部门。</p>
                    </div>
                </li>
                <li>

                    <img src="../assets/contimg/ico11.png" alt="" style="height: 12px;margin-right: 5px"> 我能以不同的基准货币进行交易吗？

                    <div class="text_box" style="display: none;">
                        <p>可以，您可以使用英镑、美元和欧元作为基准货币进行交易。</p>
                    </div>
                </li>
                <li>
                    <img src="../assets/contimg/ico11.png" alt="" style="height: 12px;margin-right: 5px"> MF金融收取佣金吗？

                    <div class="text_box" style="display: none;">
                        <p>MF金融不收取客户任何佣金。</p>
                    </div>
                </li>
                <li>

                    <img src="../assets/contimg/ico11.png" alt="" style="height: 12px;margin-right: 5px"> 投诉流程是？

                    <div class="text_box" style="display:none;">
                        <p>如果您有任何的投诉或是咨询，可以通过邮件、电话或是信件和我们联系。
                            <!-- <br> 电话：+64 093096868
                            <br> 电子邮箱：info@dsi88.com
                            <br> 地址：8 Kestev Drive, Flat Bush, Auckland, 2016 , New Zealand.
                            <br> 官方网址：http://www.dsi88.com -->
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        <!--2-->
        <div class="top_box" style="display: none">
            <ul class="marleft-aut">
                <li>
                    <img src="../assets/contimg/ico11.png" alt="" style="height: 12px;margin-right: 5px"> 无法登陆MF金融平台怎么办？
                    <div class="text_box" style="display: none;">
                        <p>如果您在使用交易平台时遇到任何困难或疑问， 请邮件至
                            <a href="">cs@mfg-fx.com</a> 或者拨打客服热线.
                        </p>
                    </div>
                </li>
                <li>
                    <img src="../assets/contimg/ico11.png" alt="" style="height: 12px;margin-right: 5px"> 什么时间可以交易？最低交易手数是多少？保证金如何收取？
                    <div class="text_box" style="display:none;">
                        <p>因每一种产品的交易时间、最低交易手数、保证金收取均有不同，详情请查看相关产品合约细则。</p>
                    </div>
                </li>
                <li>
                    <img src="../assets/contimg/ico11.png" alt="" style="height: 12px;margin-right: 5px"> 什么是点差？
                    <div class="text_box" style="display: none;">
                        <p>点差是指交易平台中的买入价和卖出价的差额， 也就是建仓的交易成本，在建仓时MF金融会收取点差费用。 在正常市况下，产品点差是固定的， 当产品市场流动性不足时， MF金融将根据当时的市场行情相应的调整点差。

                        </p>
                    </div>
                </li>
            </ul>
        </div>
        <!--3-->
        <div class="top_box" style="display: none">
            <ul class="marleft-aut">
                <li>

                    <img src="../assets/contimg/ico11.png" alt="" style="height: 12px;margin-right: 5px"> 什么是挂单？
                    <div class="text_box" style="display: none">
                        <p>挂单是指设定一个理想的交易价格，当最新市场价到达设定的价格时， 系统将会自动建仓。 挂单的优势在于投资者可以在理想的价位建仓， 投资者可自主选择交易品种 、交易手数、目标成交价位，无需长期留意市况或长期开启交易平台。
                        </p>
                    </div>
                </li>

                <li>

                    <img src="../assets/contimg/ico11.png" alt="" style="height: 12px;margin-right: 5px"> 什么时间可以交易？最低交易手数是多少？保证金如何收取？
                    <div class="text_box" style="display: none">
                        <p>因每一种产品的交易时间、最低交易手数、保证金收取均有不同，详情请查看相关产品合约细则
                        </p>
                    </div>
                </li>
                <li>

                    <img src="../assets/contimg/ico11.png" alt="" style="height: 12px;margin-right: 5px"> 什么是“限价买单”？如何设置？
                    <div class="text_box" style="display: none">
                        <p>
                            当您预期商品价位将向下调整至某个价位后反弹上升，即可建立Buy Limit(限价买单)。请在平台左方 “市场报价”窗口“商品列表”中双击您需要进行交易的商品， 在弹出窗口“手数”输入框输入建仓手数接着在“交易类型”选择“挂单交易”后， 在“类型”选择“Buy Limit”并输入价位下限，设定挂单期限后，点击“下单”即可。 以伦敦金为例，伦敦金挂单价位须低于当前最新价位至少300点、 伦敦银至少200点;当未来买入价等于设置挂单成交价时，系统便会自动买入建仓。
                        </p>
                    </div>

                </li>
                <li>

                    <img src="../assets/contimg/ico11.png" alt="" style="height: 12px;margin-right: 5px"> 什么是“止损买单”？如何设置？
                    <div class="text_box" style="display: none">
                        <p>
                            当您预期商品价位升穿某个价位后会持续上升时，即可建立Buy Stop(止损买单)。请在平台左方 “市场报价”窗口“商品列表”中双击您需要进行交易的商品，在弹出窗口“手数”输入框输入建仓手数， 接着在“交易类型”选择“挂单交易”后，在“类型”选择“Buy Stop”并输入价位上限，设定挂单期限后， 点击“下单”即可。以伦敦金为例，伦敦金挂单价位须高于当前最新价位至少300点、 伦敦银至少200点；当未来买入价等于设置挂单成交价时，系统便会自动买入建仓。
                        </p>
                    </div>

                </li>


            </ul>
        </div>

        <!--4-->
        <div class="top_box" style="display: none">
            <ul class="marleft-aut">
                <li>

                    <img src="../assets/contimg/ico11.png" alt="" style="height: 12px;margin-right: 5px"> 如何更改我的个人信息？
                    <div class="text_box" style="display: none;">
                        <p>客户需要用真实账户的注册邮箱发送邮件至
                            <a href="#">
                             cs@mfg-fx.com</a>，邮件内容需注明新的个人信息。 或者，客户可以登陆客户专区，选择我的账户， 点击账户设置， 在联系详情部分修改个人信息。
                        </p>
                    </div>
                </li>


                <li>

                    <img src="../assets/contimg/ico11.png" alt="" style="height: 12px;margin-right: 5px"> 什么条件下会进行强制平仓？
                    <div class="text_box" style="display: none;">
                        <p>
                            当账户净值低于强制平仓保证金要求时，系统会进行强制平仓；周末过市或节假日过市，净值必须保持在 每手不少于过市保证金金额，如不足又未能及时存入资金，则进行部份平仓至足够为止；预付比例要维持在50％， 低于50％时系统会进行全部强平。锁仓并不能完全免去强制平仓的风险 ，其账户余额可能因利息开支及买卖差价改变而触发强制平仓，因此客户在进行锁仓后仍须留意其账户结余及维持保证金。
                        </p>
                    </div>
                </li>

                <li>

                    <img src="../assets/contimg/ico11.png" alt="" style="height: 12px;margin-right: 5px"> 什么是点差？
                    <div class="text_box">
                        <p>
                            点差是指交易平台中的买入价和卖出价的差额，也就是建仓的交易成本，在建仓时MF金融会收取点差费用。 在正常市况下，产品点差是固定的，当产品市场流动性不足时，MF金融将根据当时的市场行情相应的调整点差。 </p>
                    </div>
                </li>


            </ul>
        </div>
    </div>
    <div style="display:none">
        <ul>
            <li id="to3">
                <a href="">
                    <div class="wow animated bounceInUp" data-wow-delay="0.2s">
                        <div class="box-3-top">
                            <img src="../assets/contimg/ico11.png" alt="">
                            <p>MF金融提供的交易产品有哪些？</p>
                        </div>
                        <p>MF金融为海外华人提供国际化的贵金属、原油/天然气、指数等多元化产品在线交易服务，更多详情请查看产品中心。</p>
                    </div>
                </a>
            </li>
            <li>
                <a href="">
                    <div class="wow animated bounceInUp" data-wow-delay="0.3s">
                        <div class="box-3-top">
                            <img src="../assets/contimg/ico11.png" alt="">
                            <p>什么时间可以交易？最低交易手数是多少？保证金如何收取？</p>
                        </div>
                        <p>因每一种产品的交易时间、最低交易手数、保证金收取均有不同，详情请查看相关产品合约细则。</p>
                        <p> 贵金属交易：请查看贵金属合约细则；</p>
                        <!-- <p>外汇交易：查看外汇合约细则；</p> -->
                        <p>原油交易：查看原油合约细则；</p>
                        <p>指数交易：请查看指数合约细则。</p>


                    </div>
                </a>
            </li>
            <li>
                <a href="">
                    <div class="wow animated bounceInUp" data-wow-delay="0.4s">
                        <div class="box-3-top">
                            <img src="../assets/contimg/ico11.png" alt="">
                            <p>在MF金融平台上交易会收取服务费吗？</p>
                        </div>
                        <p>在MF金融平台上交易不收取任何服务费用。</p>
                    </div>
                </a>
            </li>
            <li>
                <a href="">
                    <div class="wow animated bounceInUp" data-wow-delay="0.5">
                        <div class="box-3-top">
                            <img src="../assets/contimg/ico11.png" alt="">
                            <p>什么是点差？</p>
                        </div>
                        <p>
                            点差是指交易平台中的买入价和卖出价的差额，也就是建仓的交易成本，在建仓时MF金融会收取点差费用。在正常市况下，产品点差是固定的，当产品市场流动性不足时，MF金融将根据当时的市场行情相应的调整点差。</p>
                    </div>
                </a>
            </li>
            <li>
                <a href="">
                    <div class="wow animated bounceInUp" data-wow-delay="0.5">
                        <div class="box-3-top">
                            <img src="../assets/contimg/ico11.png" alt="">
                            <p>什么是挂单？</p>
                        </div>
                        <p>
                            挂单是指设定一个理想的交易价格，当最新市场价到达设定的价格时，系统将会自动建仓。挂单的优势在于投资者可以在理想的价位建仓，投资者可自主选择交易品种、交易手数、目标成交价位，无需长期留意市况或长期开启交易平台。
                        </p>
                    </div>
                </a>
            </li>
            <li>
                <a href="">
                    <div class="wow animated bounceInUp" data-wow-delay="0.5">
                        <div class="box-3-top">
                            <img src="../assets/contimg/ico11.png" alt="">
                            <p>什么是“限价买单”？如何设置？</p>
                        </div>
                        <p>
                            当您预期商品价位将向下调整至某个价位后反弹上升，即可建立Buy Limit(限价买单)。请在平台左方“市场报价”窗口“商品列表”中双击您需要进行交易的商品，在弹出窗口“手数”输入框输入建仓手数接着在“交易类型”选择“挂单交易”后，在“类型”选择“Buy Limit”并输入价位下限，设定挂单期限后，点击“下单”即可。以伦敦金为例，伦敦金挂单价位须低于当前最新价位至少300点、伦敦银至少200点;当未来买入价等于设置挂单成交价时，系统便会自动买入建仓。
                        </p>
                    </div>
                </a>
            </li>
            <li>
                <a href="">
                    <div class="wow animated bounceInUp" data-wow-delay="0.5">
                        <div class="box-3-top">
                            <img src="../assets/contimg/ico11.png" alt="">
                            <p>什么是“止损买单”？如何设置？</p>
                        </div>
                        <p>
                            当您预期商品价位升穿某个价位后会持续上升时，即可建立Buy Stop(止损买单)。请在平台左方“市场报价”窗口“商品列表”中双击您需要进行交易的商品，在弹出窗口“手数”输入框输入建仓手数，接着在“交易类型”选择“挂单交易”后，在“类型”选择“Buy Stop”并输入价位上限，设定挂单期限后，点击“下单”即可。以伦敦金为例，伦敦金挂单价位须高于当前最新价位至少300点、伦敦银至少200点；当未来买入价等于设置挂单成交价时，系统便会自动买入建仓。
                        </p>
                    </div>
                </a>
            </li>
            <li>
                <a href="">
                    <div class="wow animated bounceInUp" data-wow-delay="0.5">
                        <div class="box-3-top">
                            <img src="../assets/contimg/ico11.png" alt="">
                            <p>什么是“限价卖单”？如何设置？</p>
                        </div>
                        <p>
                            当您预期商品价位会上升至某个价位后回调下跌，即可建立Sell Limit(限价卖单)。请在平台左方“市场报价”窗口“商品列表”中双击您需要进行交易的商品，在弹出窗口“手数”输入框输入建仓手数，接着在“交易类型”选择“挂单交易”后，在“类型”选择“Sell Limit”并输入价位上限，设定挂单期限后，点击“下单”即可。以伦敦金为例，伦敦金挂单价位须高于当前最新价位至少300点、伦敦银至少200点；当未来买入价等于设置挂单成交价时，系统便会自动买入建仓。
                        </p>
                    </div>
                </a>
            </li>
            <li>
                <a href="">
                    <div class="wow animated bounceInUp" data-wow-delay="0.5">
                        <div class="box-3-top">
                            <img src="../assets/contimg/ico11.png" alt="">
                            <p>什么条件下会进行强制平仓？</p>
                        </div>
                        <p>
                            当账户净值低于强制平仓保证金要求时，系统会进行强制平仓；周末过市或节假日过市，净值必须保持在每手不少于过市保证金金额，如不足又未能及时存入资金，则进行部份平仓至足够为止；预付比例要维持在50％，低于50％时系统会进行全部强平。锁仓并不能完全免去强制平仓的风险，其账户余额可能因利息开支及买卖差价改变而触发强制平仓，因此客户在进行锁仓后仍须留意其账户结余及维持保证金。
                        </p>
                    </div>
                </a>
            </li>
            <li>
                <a href="">
                    <div class="wow animated bounceInUp" data-wow-delay="0.2s">
                        <div class="box-3-top">
                            <img src="../assets/contimg/ico11.png" alt="">
                            <p>MF金融提供的交易产品有哪些？</p>
                        </div>
                        <p>MF金融为海外华人提供国际化的贵金属、原油/天然气、指数等多元化产品在线交易服务，更多详情请查看产品中心。</p>
                    </div>
                </a>
            </li>
            <li>
                <a href="">
                    <div class="wow animated bounceInUp" data-wow-delay="0.3s">
                        <div class="box-3-top">
                            <img src="../assets/contimg/ico11.png" alt="">
                            <p>什么时间可以交易？最低交易手数是多少？保证金如何收取？</p>
                        </div>
                        <p>因每一种产品的交易时间、最低交易手数、保证金收取均有不同，详情请查看相关产品合约细则。</p>
                        <p> 贵金属交易：请查看贵金属合约细则；</p>
                        <!-- <p>外汇交易：查看外汇合约细则；</p> -->
                        <p>原油交易：查看原油合约细则；</p>
                        <p>指数交易：请查看指数合约细则。</p>


                    </div>
                </a>
            </li>
            <li>
                <a href="">
                    <div class="wow animated bounceInUp" data-wow-delay="0.4s">
                        <div class="box-3-top">
                            <img src="../assets/contimg/ico11.png" alt="">
                            <p>在MF金融平台上交易会收取服务费吗？</p>
                        </div>
                        <p>在MF金融平台上交易不收取任何服务费用。</p>
                    </div>
                </a>
            </li>
            <li>
                <a href="">
                    <div class="wow animated bounceInUp" data-wow-delay="0.5">
                        <div class="box-3-top">
                            <img src="../assets/contimg/ico11.png" alt="">
                            <p>什么是点差？</p>
                        </div>
                        <p>
                            点差是指交易平台中的买入价和卖出价的差额，也就是建仓的交易成本，在建仓时MF金融会收取点差费用。 在正常市况下，产品点差是固定的，当产品市场流动性不足时，MF金融将根据当时的市场行情相应的调整点差。
                        </p>
                    </div>
                </a>
            </li>
            <li>
                <a href="">
                    <div class="wow animated bounceInUp" data-wow-delay="0.5">
                        <div class="box-3-top">
                            <img src="../assets/contimg/ico11.png" alt="">
                            <p>什么是挂单？</p>
                        </div>
                        <p>
                            挂单是指设定一个理想的交易价格，当最新市场价到达设定的价格时，系统将会自动建仓。 挂单的优势在于投资者可以在理想的价位建仓，投资者可自主选择交易品种、交易手数、目标成交价位， 无需长期留意市况或长期开启交易平台。
                        </p>
                    </div>
                </a>
            </li>
            <li>
                <a href="">
                    <div class="wow animated bounceInUp" data-wow-delay="0.5">
                        <div class="box-3-top">
                            <img src="../assets/contimg/ico11.png" alt="">
                            <p>什么是“限价买单”？如何设置？</p>
                        </div>
                        <p>
                            当您预期商品价位将向下调整至某个价位后反弹上升，即可建立Buy Limit(限价买单)。请在平台左方“市场报价”窗口“商品列表”中双击您需要进行交易的商品，在弹出窗口“手数”输入框输入建仓手数接着在“交易类型”选择“挂单交易”后，在“类型”选择“Buy Limit”并输入价位下限，设定挂单期限后，点击“下单”即可。以伦敦金为例，伦敦金挂单价位须低于当前最新价位至少300点、伦敦银至少200点;当未来买入价等于设置挂单成交价时，系统便会自动买入建仓。
                        </p>
                    </div>
                </a>
            </li>
            <li>
                <a href="">
                    <div class="wow animated bounceInUp" data-wow-delay="0.5">
                        <div class="box-3-top">
                            <img src="../assets/contimg/ico11.png" alt="">
                            <p>什么是“止损买单”？如何设置？</p>
                        </div>
                        <p>
                            当您预期商品价位升穿某个价位后会持续上升时，即可建立Buy Stop(止损买单)。请在平台左方“市场报价”窗口“商品列表”中双击您需要进行交易的商品，在弹出窗口“手数”输入框输入建仓手数，接着在“交易类型”选择“挂单交易”后，在“类型”选择“Buy Stop”并输入价位上限，设定挂单期限后，点击“下单”即可。以伦敦金为例，伦敦金挂单价位须高于当前最新价位至少300点、伦敦银至少200点；当未来买入价等于设置挂单成交价时，系统便会自动买入建仓。
                        </p>
                    </div>
                </a>
            </li>
            <li>
                <a href="">
                    <div class="wow animated bounceInUp" data-wow-delay="0.5">
                        <div class="box-3-top">
                            <img src="../assets/contimg/ico11.png" alt="">
                            <p>什么是“限价卖单”？如何设置？</p>
                        </div>
                        <p>
                            当您预期商品价位会上升至某个价位后回调下跌，即可建立Sell Limit(限价卖单)。请在平台左方“市场报价”窗口“商品列表”中双击您需要进行交易的商品，在弹出窗口“手数”输入框输入建仓手数，接着在“交易类型”选择“挂单交易”后，在“类型”选择“Sell Limit”并输入价位上限，设定挂单期限后，点击“下单”即可。以伦敦金为例，伦敦金挂单价位须高于当前最新价位至少300点、伦敦银至少200点；当未来买入价等于设置挂单成交价时，系统便会自动买入建仓。
                        </p>
                    </div>
                </a>
            </li>
            <li>
                <a href="">
                    <div class="wow animated bounceInUp" data-wow-delay="0.5">
                        <div class="box-3-top">
                            <img src="../assets/contimg/ico11.png" alt="">
                            <p>什么条件下会进行强制平仓？</p>
                        </div>
                        <p>
                            当账户净值低于强制平仓保证金要求时，系统会进行强制平仓；周末过市或节假日过市，净值必须保持在每手不少于过市保证金金额，如不足又未能及时存入资金，则进行部份平仓至足够为止；预付比例要维持在50％，低于50％时系统会进行全部强平。锁仓并不能完全免去强制平仓的风险，其账户余额可能因利息开支及买卖差价改变而触发强制平仓，因此客户在进行锁仓后仍须留意其账户结余及维持保证金。
                        </p>
                    </div>
                </a>
            </li>
        </ul>
    </div>

    <div class="down_tl">
        <div class="down_bx">
            <p class="wow bounceIn">
                MetaTrader 4
            </p>
            <p class="wow bounceIn">
                Meta Trader 4 (MT4)交易平台是世界上最流行的在线 交易终端。能够分析金融市场并使用EA交易。移动交易，交易信号和市场是MetaTrader 4的组成部分， 可以增强您的 交易体验。

            </p>
            <p class="wow slideInDown">
                具有广泛需求的数百万交易者选择了MetaTrader 4 在市场上交易。该平台为所有技术水平的交易者提供了充足的机遇：先进的技术分析，灵活的交易系统，算法交易和 EA交易，以及移动交易应用程序。

            </p>
            <p class="wow slideInUp">
                信号 和 市场 的附加服务更加扩大了MetaTrader 4的服务范围。信号服务允许您复制其他交易者的交易，而市场为您提供了供您购买的各种EA交易和技术指标。
            </p>
            <div class="layout clearfix">
                <div class="lay_l wow bounceInLeft clearfix">
                    <img src="../assets/contimg/mt4.jpg" alt="">
                </div>
                <div class="lay_r wow bounceInRight clearfix">
                    <ul>
                        <li>
                            <img src="../assets/contimg/ico11.png" alt=""> 订单成交迅速 快速、可靠、

                        </li>
                        <li>
                            <img src="../assets/contimg/ico11.png" alt=""> 全面的图表功能

                        </li>
                        <li>
                            <img src="../assets/contimg/ico11.png" alt=""> 内嵌来自全球各地的最新财经新闻

                        </li>
                        <li>
                            <img src="../assets/contimg/ico11.png" alt=""> 提供预警功能

                        </li>
                        <li>
                            <img src="../assets/contimg/ico11.png" alt=""> 双向挂单交易执行功能

                        </li>
                        <li>
                            <img src="../assets/contimg/ico11.png" alt=""> 在线监控和管理持仓头寸、资产净值和敞口头寸

                        </li>
                        <li>
                            <img src="../assets/contimg/ico11.png" alt=""> 提供MT4多种辅助软件
                        </li>
                        <li>
                            <img src="../assets/contimg/ico11.png" alt=""> MT4助推器提供矩阵关联辅助构建多币种相关性策略
                        </li>
                    </ul>
                </div>
            </div>
            <div class="down_home wow bounceInUp">
                <a class="down_home_tips wow" style="background: #ff6f13;" title="扫码下载">安卓版下载</a>
                <a class="down_home_tips wow" style=" background: #74b118;" title="扫码下载">IOS版下载</a>
                <a href="https://download.mql5.com/cdn/web/11518/mt4/mandyfinancialgroup4setup.exe" title="点击下载" style=" background: #353535;">PC版下载</a>


                <div class="tips_img">
                    <div class="ioc">
                        <img src="../assets/img/ico-p.png" alt="">
                        <p>MT4 IOS扫码下载</p>
                    </div>
                    <div class="andorid">
                        <img src="../assets/img/ico-a.png" alt="">
                        <p>MT4 Android扫码下载</p>
                    </div>
                </div>
            </div>


        </div>
    </div>
    <Footer></Footer>
</div>
  
</template>

<style scoped>
.down_bx {
    width: 1200px;
    height: 100%;
    position: relative;
}
</style>
<style >
     @import "../assets/css/index.css";
      @import "../assets/css/about.css";

     .mian-tl {
          width: 100%;
          height: 100%;
      }
      
    .mian-bx {
        width: 1200px;
        height: 100%;
        margin: 0 auto;
    }
    
    .header-mian {
        width: 100%;
        height: 80px;
        line-height: 80px;
    }
    
    .header-mian>img {
        height: 12px;
    }
    
    .nth1 {
        font-size: 24px;
        color: #000;
        margin: 10px 0;
    }
    
    .nth2_tatel {
        color: #646464;
        margin: 20px 0;
    }
    
    .mtop {
        margin-top: 20px;
    }
    
    .bntn {
        display: inline-block;
        width: 210px;
        height: 60px;
        background: #f1c203;
        color: #000;
        font-size: 16px;
        line-height: 60px;
        text-align: center;
        font-weight: bold;
        margin: 20px 0px 20px 0px;
    }
    
    .bntn:hover {
        color: #000;
    }
    
    .clo {
        color: #f1c203;
    }
    
    .mian-bx>ul>li {
        line-height: 35px;
    }
    
    #img1 {
        position: absolute;
        top: 20%;
        left: 7%;
        width: 500px;
        color: #fff;
    }
    
    .banner_child_start {
        position: absolute;
        top: 90%;
        left: 0%;
    }
    
    .tab_nav {
        width: 1200px;
        /* height: 100%; */
        margin: 0 auto;
        position: relative;
    }
    
    .tab_nav>.top {
        width: 100%;
        height: 110px;
        line-height: 110px;
        text-align: center;
        position: absolute;
        top: -100px;
        z-index: 3;
    }
    
    .tab_nav>.top>span {
        display: inline-block;
        height: 50px;
        line-height: 50px;
        width: 150px;
        margin: 0px 10px;
        background: #928a85;
        color: #000;
    }
    
    .tab_nav>.top>a {
        display: inline-block;
    }
    
    .tab_nav>.top>a>span {
        display: inline-block;
        height: 40px;
        line-height: 40px;
        width: 110px;
        margin: 0px 10px;
        /* background: #ffb800; */
        color: #000;
        border-radius: 5px;
    }
    
    .top_box>ul>li {
        line-height: 50px;
        margin-left: 25px;
        cursor: pointer;
        width: 90%;
    }
    
    .top_box>ul>li>a {
        display: inline-block;
        width: 100%;
        height: 100%;
        color: #000;
        cursor: pointer;
    }
    
    .cunter_color {
        color: #ff7510 !important;
        background: #fff !important;
    }
    
    .tab_nav>.top>span:hover {
        background: #FFF;
    }
    
    .top_box>ul>li:hover {
        color: #d67c1c;
        text-decoration: none;
    }
    
    .top_box>ul>li:hover>.text_box {
        color: #000;
    }
    
    .top_box>ul>li:nth-child(1) {
        margin-top: 20px;
    }
    
    .top_box>ul>li:last-child {
        margin-bottom: 30px;
    }
    
    .tips_img {
        border: 20px solid red; 
        width: 88%;
        height: 425px;
        background: #fff;
        position: absolute;
        top: -430px;
        margin-left: 7%;
        left: 0px;
        z-index: 15;
        display: none;
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

