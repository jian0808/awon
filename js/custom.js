$(document).ready(function(){
    
    // Include html files
    // $('.header-include').load('../include/main_header.html');
    // $('.footer-include').load('../include/footer.html');

    //Main Header Hamberger Button
    $('.btn-ham').click(function(){
        $(this).toggleClass('on');
        $(this).siblings('.nav').toggleClass('mobile');
    });

    // Main Visual Swiper Slide
    var swiper = new Swiper(".main-slide", {
        pagination: {
            el: ".swiper-pagination",
        },
    });

    // Datepicker
    $.datepicker.setDefaults({
        monthNames: [ "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월" ],
        dayNamesMin: [ "일", "월", "화", "수", "목", "금", "토" ],
        dateFormat: 'yy-mm-dd'
    });

    $("#datepicker").datepicker();

    // Quick Menu & Top Button
    $(window).scroll(function(){
        if($(window).scrollTop() > 700){
            $('.quick').fadeIn(300);
        } else {
            $('.quick').fadeOut(300);
        }
    });

    $('.go-top').click(function(){
		$('html,body').animate({ scrollTop: 0 }, 200);
	});



});


