'use-strict';


  $('li').on('click', function(){
    var $aboutShow = $(this).data('content');
    $('section').hide();
    $('#' + $aboutShow).fadeIn(500);
  });
  // $('.main-nav .tab:first').click();
