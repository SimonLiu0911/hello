$(document).ready(function () {
    $(window).scroll(function(){
        var scrollPos = $(window).scrollTop();
        console.log(scrollPos)
        if (scrollPos > 793){
            $('.animateEffect-1').addClass('fadeInUp');
        };
        if (scrollPos > 1103){
            $('.animateEffect-2').addClass('fadeInUp');
        }
    })
});