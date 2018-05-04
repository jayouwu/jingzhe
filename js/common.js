// 顶部菜单
// $('.js_barsub li').on('mouseleave',function(){
//     $(this).not('.hover').removeClass('hover');
//     $(this).addClass('hover');
// }).on('mouseout',function(){
//     $(this).removeClass('hover');
// });
//
// // 首页切换
// for(var i=1;i<4;i++){
//     $('.js_tabbody[data-tab='+i+'] .cont_list').width(300*$('.js_tabbody[data-tab='+i+'] .cont_list .tabmk_cont').length+'px');
// }
// $('.js_tabtop a').mouseover(function(){
// 	  var i=$(this).parents(".js_tabbody").attr("data-tab");
// 		$(this).addClass('down').siblings().removeClass('down');
// 		var index = $(this).index();
// 		number = index;
// 		var distance = -300*index;
// 		$('.js_tabbody[data-tab='+i+'] .cont_list').stop().animate({
// 			left:distance
// 		});
// });
// 工具
$('.js_qq').on('mouseover',function(){
       $('.js_windqq').show();
});
$('.js_windqq , .js_qq').on('mouseleave',function(){
   $('.js_windqq').hide();
});
//回到顶部
//当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
$(window).on('scroll',function(){
    if ($(window).scrollTop()>200){
        $(".shortcut").show();
    }else{
        $(".shortcut").hide();
    }
});
$(".shortcut").click(function(){
    $('html,body').animate({
        scrollTop:'0px'
    },
    2000);
});


// var h=$(window).height(),w=$(window).width();
// if(h>960){
//     $('.footer').addClass('scroll');
//  }

 $('.js_tabtop').on('click','a',function(){
     var t=$(this).index(),
         tn=$(this).attr('data-num');

     $('.js_tabtop a').removeClass('down');
     $(this).addClass('down');
     $(this).parents('.js_tabbody').find('.js_tabcont').hide();
     $(this).parents('.js_tabbody').find('.js_tabcont[data-num='+tn+']').show();
});
$('.js_tabtop_1').on('click','a',function(){
    var t=$(this).index(),
        tn=$(this).attr('data-num');

    $('.js_tabtop_1 a').removeClass('down');
    $(this).addClass('down');
    $(this).parents('.js_tabbody_1').find('.js_tabcont_1').hide();
    $(this).parents('.js_tabbody_1').find('.js_tabcont_1[data-num='+tn+']').show();
});

// 提示窗口关闭
$('.js_close').on('click',function(){
    $(this).parents('.js_popup').hide(500);
    $('.popup_bg').hide();
});
