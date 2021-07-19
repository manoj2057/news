$(window).scroll(function() {    
var scroll = $(window).scrollTop();

if (scroll >= 200) {
    $(".menu-section").addClass("fixed-top");
} else {
    $(".menu-section").removeClass("fixed-top");
}
}); 


$(window).scroll(function() {    
var scroll = $(window).scrollTop();

if (scroll >= 200) {
    $(".tranding-megamenu").addClass("fixed-top");
} else {
    $(".tranding-megamenu").removeClass("fixed-top");
}
}); 

$(window).scroll(function() {    
var scroll = $(window).scrollTop();

if (scroll >= 200) {
    $(".taja-megamenu").addClass("fixed-top");
} else {
    $(".taja-megamenu").removeClass("fixed-top");
}
}); 

//SEARCH BOX


//BACK TO TOP
      $(document).ready(function(){

$(function(){
 
    $(document).on( 'scroll', function(){
 
      if ($(window).scrollTop() > 100) {
      $('.scroll-top-wrapper').addClass('show');
    } else {
      $('.scroll-top-wrapper').removeClass('show');
    }
  });
 
  $('.scroll-top-wrapper').on('click', scrollToTop);
});
 
function scrollToTop() {
  verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
  element = $('body');
  offset = element.offset();
  offsetTop = offset.top;
  $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}

});


//tab
$(function() {
  var $tabButtonItem = $('#tab-button li'),
      $tabSelect = $('#tab-select'),
      $tabContents = $('.tab-contents'),
      activeClass = 'is-active';

  $tabButtonItem.first().addClass(activeClass);
  $tabContents.not(':first').hide();

  $tabButtonItem.find('a').on('click', function(e) {
    var target = $(this).attr('href');

    $tabButtonItem.removeClass(activeClass);
    $(this).parent().addClass(activeClass);
    $tabSelect.val(target);
    $tabContents.hide();
    $(target).show();
    e.preventDefault();
  });

  $tabSelect.on('change', function() {
    var target = $(this).val(),
        targetSelectNum = $(this).prop('selectedIndex');

    $tabButtonItem.removeClass(activeClass);
    $tabButtonItem.eq(targetSelectNum).addClass(activeClass);
    $tabContents.hide();
    $(target).show();
  });
});



//TAB2

$(function() {
  var $tabButtonItem = $('#tab-button1 li'),
      $tabSelect = $('#tab-select1'),
      $tabContents = $('.tab-contents1'),
      activeClass = 'is-active';

  $tabButtonItem.first().addClass(activeClass);
  $tabContents.not(':first').hide();

  $tabButtonItem.find('a').on('click', function(e) {
    var target = $(this).attr('href');

    $tabButtonItem.removeClass(activeClass);
    $(this).parent().addClass(activeClass);
    $tabSelect.val(target);
    $tabContents.hide();
    $(target).show();
    e.preventDefault();
  });

  $tabSelect.on('change', function() {
    var target = $(this).val(),
        targetSelectNum = $(this).prop('selectedIndex');

    $tabButtonItem.removeClass(activeClass);
    $tabButtonItem.eq(targetSelectNum).addClass(activeClass);
    $tabContents.hide();
    $(target).show();
  });
});

//TAB2

$(function() {
  var $tabButtonItem = $('#tab-button2 li'),
      $tabSelect = $('#tab-select2'),
      $tabContents = $('.tab-contents2'),
      activeClass = 'is-active';

  $tabButtonItem.first().addClass(activeClass);
  $tabContents.not(':first').hide();

  $tabButtonItem.find('a').on('click', function(e) {
    var target = $(this).attr('href');

    $tabButtonItem.removeClass(activeClass);
    $(this).parent().addClass(activeClass);
    $tabSelect.val(target);
    $tabContents.hide();
    $(target).show();
    e.preventDefault();
  });

  $tabSelect.on('change', function() {
    var target = $(this).val(),
        targetSelectNum = $(this).prop('selectedIndex');

    $tabButtonItem.removeClass(activeClass);
    $tabButtonItem.eq(targetSelectNum).addClass(activeClass);
    $tabContents.hide();
    $(target).show();
  });
});


//TAB2

$(function() {
  var $tabButtonItem = $('#tab-button3 li'),
      $tabSelect = $('#tab-select3'),
      $tabContents = $('.tab-contents3'),
      activeClass = 'is-active';

  $tabButtonItem.first().addClass(activeClass);
  $tabContents.not(':first').hide();

  $tabButtonItem.find('a').on('click', function(e) {
    var target = $(this).attr('href');

    $tabButtonItem.removeClass(activeClass);
    $(this).parent().addClass(activeClass);
    $tabSelect.val(target);
    $tabContents.hide();
    $(target).show();
    e.preventDefault();
  });

  $tabSelect.on('change', function() {
    var target = $(this).val(),
        targetSelectNum = $(this).prop('selectedIndex');

    $tabButtonItem.removeClass(activeClass);
    $tabButtonItem.eq(targetSelectNum).addClass(activeClass);
    $tabContents.hide();
    $(target).show();
  });
});

//FEATURE

(function($){
    $('.feature-item').owlCarousel({
      items: 1,
      loop:true,
      margin:10,        
      nav: true,
      dots: true,        
      autoplay:true,
      autoplayTimeout:5000,
      navText: ['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],        
      responsiveClass:true,
      responsive:{
          0:{
              items:1
          },
  
          600:{
              items:2
          },

          1000:{
              items:4
          }
      }
    });

})(jQuery);






//GALLERY

(function($){
    $('.weekend-item').owlCarousel({
      items: 1,
      loop:true,
      margin:10,        
      nav: true,
      dots: true,        
      autoplay:true,
      autoplayTimeout:5000,
      navText: ['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],        
      responsiveClass:true,
      responsive:{
          0:{
              items:1
          },
  
          600:{
              items:3
          },

          1000:{
              items:4
          }
      }
    });

})(jQuery);


//PARTNER

(function($){
    $('.feature-item').owlCarousel({
      items: 1,
      loop:true,
      margin:10,        
      nav: true,
      dots: true,        
      autoplay:true,
      autoplayTimeout:5000,
      navText: ['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],        
      responsiveClass:true,
      responsive:{
          0:{
              items:1
          },
  
          600:{
              items:3
          },

          1000:{
              items:4
          }
      }
    });

})(jQuery);



//GALLERY

(function($){
    $('.gallery-item').owlCarousel({
      items: 1,
      loop:true,
      margin:10,        
      nav: true,
      dots: true,        
      autoplay:true,
      autoplayTimeout:5000,
      navText: ['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],        
      responsiveClass:true,
      responsive:{
          0:{
              items:1
          },
  
          600:{
              items:3
          },

          1000:{
              items:4
          }
      }
    });

})(jQuery);


//GALLERY PAGE

$(document).ready(function() {

  $('.link-gallery').click(function(){
    var descripcion = $(this).attr('title');
    $('#caption').html(descripcion);
      var img = $(this).find('img');
      var src = img.attr('src')
      $('#img01').attr('src', src);
    $('#myModal').css('display','block');
    $('.modal-backdrop').remove();
  });

  $('.close').click(function(){
    $('#myModal').css('display','none');
  });
  
});

//MOBILE MENU

function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}