$(function() {


    /* =========================================
        COUNTDOWN 1
     ========================================= */
    $('#clock').countdown('2020/8/2').on('update.countdown', function(event) {
      var $this = $(this).html(event.strftime('' +
        '<span class="h1 mx-2">%D</span> Hari' +
        '<span class="h1 mx-2">%H</span> Jam' +
        '<span class="h1 mx-2">%M</span> Menit' +
        '<span class="h1 mx-2">%S</span> Detik'));
    });  
});

$(document).ready(function(){
    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 50});   
  
    // Add smooth scrolling on all links inside the navbar
    $("#navbarNav a").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      }  // End if
    });
  });
