let drodownToggle = $('.dropdown-toggle');

drodownToggle.on('click', function(){
  let drodown = $(this).closest('.dropdown');
  drodown.toggleClass('show')
})


let subElement = $('.has-sub');

subElement.on('click', function(){
  let subMenu = $(this).find('.submenu');

  $(this).toggleClass('open');
  subMenu.slideToggle();
})


$('.sidebar-toggler').on('click', function(){
  $sidebar = $(this).closest('.sidebar');
  $mainContent = $('.main-content');

  $sidebar.toggleClass('open');
  $mainContent.toggleClass('open');
  $(this).toggleClass('open');

  subElement.find('.submenu').slideUp();
  
})

$('.header-burger').on('click', function(){
  $('.sidebar').addClass('active')
})

$('.sidebar-close').on('click', function(){
  $('.sidebar').removeClass('active');
})



$('.js-open-modal').on('click', function(){
  $('.modal-overlay').fadeIn();
  var id = $(this).data('modal');
  $('.modal[data-modal="' + id + '"]').fadeIn();
});

$('.modal-close').on('click', function(){
  $('modal-overlay').fadeOut();
  $('.modal').fadeOut();
});
$('.modal-overlay').on('click', function(){
  $('modal-overlay').fadeOut();
  $('.modal').fadeOut();
});

new AirDatepicker('.input-date');