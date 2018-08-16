var tops = document.getElementById("taps");
window.onscroll = function() {
    if (window.scroll().top > tops.offsetHeight) {
        tops.className = " add";

    } else {
        tops.className = " ";
    }
};

function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    }
}


$(function() {
    var btn = $("#btn>li>a");
    var tabbox = $(".tab_box");
    // var delet = $("#btn");
    for (var i = 0; i < btn.length; i++) {
        btn[i].index = i;
        btn[i].onmousemove = function() {
            for (var j = 0; j < tabbox.length; j++) {}
            $(tabbox[this.index]).stop(false).slideDown().siblings(".tab_box").hide();
        }
    }

    $(window).scroll(function() {
        $(".tab_box").slideUp(400);
    })
    $("#newoff").hover(function() {
        $(".tab_box").slideUp(800);
    })

});
//滚动关闭导航栏
$(".fon_wih").click(function() {
        event.stopPropagation();
        $(".fonst_f").animate({
            "opacity": "1",
            "bottom": "-40"
        })
        $(".fonst_s").animate({
            "opacity": "1",
            "bottom": "-80"
        })
    })
    // 繁
$(".fonst_f").click(function() {
    event.stopPropagation();
    $(".fonst_f").animate({
        "opacity": "0",
        "bottom": "80"
    })
    $(".fonst_s").animate({
        "opacity": "0",
        "bottom": "80"
    })
})

$(".fonst_s").click(function() {
    event.stopPropagation();
    $(".fonst_f").animate({
        "opacity": "0",
        "bottom": "80"
    })
    $(".fonst_s").animate({
        "opacity": "0",
        "bottom": "80"
    })
})

$(function() {
    var id = '#my-offcanvas';
    var $myOc = $(id);
    $('.doc-oc-js').on('click', function() {
        $myOc.offCanvas($(this).data('rel'));
    });
});