

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    merge:true,
    navText:["<span><i class='fa-solid fa-circle-chevron-left right'></i></span>","<span clas='nav-icons'><i class='fa-solid fa-circle-chevron-right right'></i></span>"],

    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});