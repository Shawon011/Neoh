// Header jQuery Start
$(document).ready(function(){
    $(".menu-area").click(function(){
        $(".icon").toggleClass("crose")
    })
    $(".menu-area-close").click(function(){
        $(".header-border").toggleClass("border-close")
    })
    $("#menu-slid").click(function(){
        $("#slid-in").fadeToggle(500)
    })
    $("#menu-slid").click(function(){
        $(".menu-item-area li").toggleClass("slid-itme")
    })
})

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 10){
            $('#header-scroll').addClass("sticky");
        }else{
            $('#header-scroll').removeClass("sticky");
        }
    })
})
// Header jQuery End


// Drop jQuery start
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
})
// progress-line
$('.owl-carousel-2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
})
// Drop jQuery End



// Blog jQuery Start



// Blog jQuery End