//счетчик цифр + opacity scroll
$(document).ready(function () {
 
          var show = true;
          var countbox = ".credentials";
          $(window).on("scroll load resize", function () {
              if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
              var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
              var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
              var w_height = $(window).height(); // Высота окна браузера
              var d_height = $(document).height(); // Высота всего документа
              var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
              if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
                  $('.number').css('opacity', '1');
                  $('.number').spincrement({
                      thousandSeparator: "",
                      duration: 1600
                  });
                   
                  show = false;
              }
          });
       
      });
//slider fade 
$(document).ready(function(){
          $('.fade').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            arrows: false,
            cssEase: 'linear'
          });
    });

//navbar-mobile click background
$(".navbar-toggler").click(
      function(){ $(".navbar").addClass("active-mob")}
    ); 


//navbar scroll+background
$(window).on("scroll", function() {
    if($(window).scrollTop() > 800) {
        $(".navbar").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".navbar").removeClass("active");
    }
});
//up button low scroll
$(window).on("scroll", function() {
          if($(window).scrollTop() > 800) {
              $(".up-btn").addClass("up-disp");
          } else {
              //remove the background property so it comes transparent again (defined in your css)
             $(".up-btn").removeClass("up-disp");
          }
      });
//low-scroll to id
$(document).ready(function(){
      $(".low-scroll-main").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 700);
      });
  });