$(document).ready(function(){
    'use strict'
  $(window).scroll(function(){
    if($(window).scrollTop() < 80){
        $('.navbar-default').css({
            'margin-top':'-100px',
            'opacity':'0'
        })
        $('.navbar-default').css({
            'background-color':'rgba(59,59,59,0)'
        })
    }
    else{
        $('.navbar-default').css({
            'margin-top':'0px',
            'opacity':'1'
        })
        $('.navbar-default').css({
            'background-color':'rgba(59,59,59,1)'
        })
        $('.small-logo').css({
            'height':'35px',
            'padding':'0'
        })
    }
  })
})
$(document).ready(function(){
    'use strict';
    $('.navbar-nav li a').click(function(){
        'use strict';
        $('.navbar-nav li a').removeClass("active");
        $(this).addClass("active");

    })
})
$(document).ready(function(){
    'use strict';
    setInterval(function(){
        var windowheigt=$(window).height();
        var containerheight=$('.container-height').height();
        var padtop=windowheigt-containerheight;
        console.log(padtop);
        $('.container-height').css({
            'padding-top':Math.round(padtop)+'px',
            'padding-bottom':Math.round(padtop)+'px'

        })
    },10)
    
})