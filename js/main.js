$(document).ready(function(){
    //PC
    $('.pc_menu nav > div > div').hover(function(){
        //sub slidedown
        $('.sub').stop().slideDown(500,"easeOutExpo");
        //sub slideup
        $('.sub_bg').stop().css('height','15vw').slideDown(500,"easeOutExpo");
    },function(){
        //sub slidedown
        $('.sub').stop().slideUp();
        //sub slideup
        $('.sub_bg').stop().css('height','15vw').slideUp();
    });

    $('.mo_menu nav > div > div').hover(function(){
        $(this).find('.sub').stop().slideDown();
    },function(){
        $(this).find('.sub').stop().slideUp();
    });
    
    $('.mo_menu_btn').click(function(){
        $('.mo_menu').animate({left:'0vw'}, 500, "easeOutExpo")
    });
    $('.mo_menu .close').click(function(){
        $('.mo_menu').animate({left:'-70vw'}, 500, "easeOutExpo")
    });

    $('.top').click(function(){
        $('html,body').animate({scrollTop:0}, 0);
    });

});
