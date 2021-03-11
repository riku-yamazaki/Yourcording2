
$(document).ready(function(){ 

    //link
   
    $('a[href^="#"]').click(function() {
  
      var speed = 400;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - 95;
      $('body,html').animate({
        scrollTop: position
      }, speed, 'swing');
      return false;
    });
  
    //link
  
    //hamburger
  
     $('.hamburber-list__link').click(function(){
      
      $('#nav-input').prop('checked' , false);
  
     });
  
    //hamburger
  
  
    //animation
  
    AOS.init({
       duration:800,
    });
  
    //animation
  
    //swiper
    var swiper = new Swiper('.swiper-container', {
        
      centeredSlides: true,
       slidesPerView: 'auto',
       spaceBetween: 56,
    
      autoplay: {
        disableOnInteraction: true,
        delay:5000,
        
      },
      loop: true,
  
       breakpoints: {
       
        375: {
         
         spaceBetween: 30,
        },
        
        }
  });
  
    //swiper
  
    //accodion
  
    $('.accordion-list__item,.accordion-list__item--first').click(function() {
      var $answer = $(this).find('.accordion__body');
    
      if($answer.hasClass('accordion__body--active')) { 
        $answer.removeClass('accordion__body--active');
        $answer.slideUp();
    
      } else {
        $answer.addClass('accordion__body--active'); 
         $answer.slideDown();
      }
    });
  
  
    $('.accordion-list__item').click(function() {
      var $icon = $(this).find('.accordion__question--first');
    
      if($icon.hasClass('accordion__question--first--active')) { 
        $icon.removeClass('accordion__question--first--active');
    
      } else {
        $icon.addClass('accordion__question--first--active'); 
      }
    });
  
    //accodion
  
    //form
  
    const $submitBtn = $('#submit');
   
     $('#form input,#form textarea').on('change', function () {
       
   
       if (
         $('#form input[type="text"]').val() !== "" &&
         $('#form input[type="email"]').val() !== ""&&
         $('#form #policy').prop('checked') === true &&
         $('#form #textarea').val() !=="" &&
         $submitBtn.prop('disabled', true)
       ) {
         $submitBtn.prop('disabled', false);
         $('.alert').css('display', 'none');
         $submitBtn.css('margin-bottom', '35px');
   
       } else {
         $submitBtn.prop('disabled', true);
         $('.alert').css('display', 'block')
         $submitBtn.css('margin-bottom', '0px')
       }
     });
  
     $submitBtn.hover(function() {
      
      if (
        $('#form input[type="text"]').val() !== "" &&
        $('#form input[type="email"]').val() !== ""&&
        $('#form #policy').prop('checked') === true &&
        $('#form #textarea').val() !=="" &&
        $submitBtn.prop('disabled', true)
      ) {
         $submitBtn.prop('disabled', false);
         $('.alert').css('display', 'none');
         $submitBtn.css('margin-bottom', '35px');
  
      } else {
        $submitBtn.prop('disabled', true);
        $('.alert').css('display', 'block');
        $submitBtn.css('margin-bottom', '0px');
      }
  
    },{
  
    });
  
   
     $('#form').submit(function (event) {
      var formData = $('#form').serialize();
      $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeujuvFbBj9JZ32Gh0NeHnXM58DBiRdj-Mqurmd4VIbHvJn2w/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
       });
       event.preventDefault();
    });
   
    //form
  
  }); //ラスト