document.addEventListener("DOMContentLoaded", function() {

    $(document).scroll(function() {
        if($(document).scrollTop() > 1){
            $('header').addClass('scrolled');
        } else if($(document).scrollTop() == 0) {
            $('header').removeClass('scrolled');
        }
    });

    $('.nav-tabs li').click(function(evt){
        evt.preventDefault();
        $('.nav-tabs li').removeClass('active');
        $(this).addClass('active');
    });

});
