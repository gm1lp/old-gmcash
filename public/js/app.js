$('.slider-1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoWidth:true,
    center:true,
    responsiveClass:true,
    navText: ['<div class="slider-left"></div>', '<div class="slider-right"></div>'],
    items:2,
});
$('.slider-2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    center:true,
    autoplay:true,
    autoWidth:true,
    responsiveClass:true,
    navText: ['<div class="slider-left"></div>', '<div class="slider-right"></div>'],
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});
let glob = {
    auth: $('#auth'),
    init() {
        window.addEventListener('click', function(e){
            if (!document.getElementById('auth').contains(e.target) && !$('#auth').hasClass('d-none'))
                $('#auth').addClass('d-none');
        });
    },
    st(id) {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#" + id).offset().top
        }, 300)
    },
    ta() {
        setTimeout(()=>{
            if(this.auth.hasClass('d-none'))
                this.auth.removeClass('d-none');
            else
                this.auth.addClass('d-none');
        });
    },
    sl() {
        let $text = $('.btn-collapse span');
        let $icon = $('.btn-collapse i.fa');
        $('.clear').removeClass('clearfix');
        $('.hashtags-slider').slideToggle({
            done: function() {
                $('.clear').addClass('clearfix');
                console.log('test', $('.hashtags-slider').is(':visible'));
                if ($(this).is(':visible')) {
                    $text.text('свернуть');
                    $icon.removeClass('fa-chevron-down').addClass('fa-chevron-up')
                } else {
                    $text.text('развернуть');
                    $icon.removeClass('fa-chevron-up').addClass('fa-chevron-down')
                }
            }
        })
    }
}
$(document).ready(function(){
    glob.init();
    $('.owl-prev,.owl-next').on('click', function(event){
        $(this).parent().parent().parent().find('.owl-carousel').trigger('stop.owl.autoplay');
    });
});