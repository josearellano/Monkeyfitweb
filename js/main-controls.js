$(document).ready(function() {
 
  $("#owl-banner").owlCarousel({
 	pagination : false,
    navigation : true,
    lazyLoad : true,
    slideSpeed : 300,
    paginationSpeed : 400,
    autoPlay: 8000,
    singleItem:true
  });

   $("#owl-mobile").owlCarousel({
 	pagination : false,
    navigation : true,
    lazyLoad : true,
    slideSpeed : 300,
    paginationSpeed : 400,
    autoPlay: 7000,
    singleItem:true
  });

  $("#owl-screen").owlCarousel({
 	  pagination : true,
    navigation : false,
    lazyLoad : true,
    slideSpeed : 300,
    paginationSpeed : 400,
    autoPlay: 5000,
    items : 4
  });

  $("#owl-testm").owlCarousel({
 	pagination : true,
    navigation : false,
    lazyLoad : true,
    slideSpeed : 300,
    paginationSpeed : 400,
    autoPlay: 5000,
    singleItem:true
  });

  $("#owl-associated").owlCarousel({
 	  pagination : true,
    navigation : false,
    lazyLoad : true,
    slideSpeed : 300,
    paginationSpeed : 400,
    autoPlay: 6000,
    items : 4
  });

  $('#explore,#subscription').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
        $('html,body').animate({
        scrollTop: target.offset().top
        }, 1000);
      }
    }
    return false;
  });
 

 
});