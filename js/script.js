$(function() {
  var $checkBox = $('.decor_checkbox');
  $checkBox.each(function(){
    var checkbox = $(this).find('input[type=checkbox]');
    if(checkbox.prop("checked")) $(this).toggleClass("check_active");
  });

  $checkBox.each(function (){
    $(this).on('click', function() {
      var checkbox = $(this).find('input[type=checkbox]');
      if($(this).hasClass('check_active')) {
        $(this).removeClass("check_active");
        checkbox.attr("checked", false);
      //window.location = $(this).data('target-page');
    } else {
      $(this).toggleClass("check_active");
      checkbox.attr("checked", true);
      return false;
    }
  });
  });

  var overlay = $('#overlay');
  var open_modal = $('.open_modal');
  var close = $('.modal_close, #overlay');
  var modal = $('.modal_div');

  open_modal.click( function(event){
    event.preventDefault();
    var div = $(this).attr('href');
    overlay.fadeIn(400,
      function(){
        $(div)
        .css('display', 'block')
        .animate({opacity: 1, top: '50%'}, 200);
      });
  });
  close.click( function(){
    modal.animate({opacity: 0, top: '45%'}, 200,
     function(){
       $(this).css('display', 'none');
       overlay.fadeOut(400);
     }
     );
  });


  var $globMenu = $('.main-menu-list li'),
  $openContainer = $('.open-wrap'),
  $itemMenu = $('.item-menu'),
  $menu = $('.menu-categories li')

  $(document).click(function(e){
    if ($(e.target).parents().filter('.top-nav').length != 1) {
      $openContainer.slideUp(300);
      $globMenu.css('opacity', '1');
      $globMenu.removeClass('active');
    }
  });
  $globMenu.each(function (index) {
    var drop = $(this).index();
    $(this).on('click', function() {

      if ($itemMenu.eq(index).filter(':hidden').length > 0) {
        $itemMenu.eq(index).addClass('active').siblings(index).removeClass('active');
        $openContainer.slideDown(300);
        $globMenu.css('opacity', '.5');
      } else {

        $openContainer.slideUp(300);
        $globMenu.css('opacity', '1');
      }

      $globMenu.eq(index).toggleClass('active').siblings().removeClass('active');
    });
  });


  $('.product-size li').each(function () {
    $(this).on('click', function(e) {
      if ($(this).hasClass('active')) {
        $(this).children(
          function(){
            document.location.href = $(this).attr('href');
          }
          );
      } else {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
      }
    });
  });


  $(".doc-item").bind("click", function(e) {
    e.preventDefault();
    $('.m7').addClass('active').fadeIn(300);
    $('body').addClass('active');
  });
  $('.mycarousel2 img').click(function() {
    $('.modal-gl7 img').attr('src',$(this).attr('dt-src'));
    $(this).parent().addClass('active').siblings().removeClass('active');
  });
});



