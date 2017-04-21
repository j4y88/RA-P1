//Flickity Carousel
$('.main-carousel').flickity({
  // options
  cellAlign: 'center',
  contain: true,
  wrapAround: true,
});


//Smooth Scrolling
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});  

//Email Validation Check
function EmailCheck(inputText){  
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
  if(inputText.value.match(mailformat)){  
    document.form1.email.focus();  
    return true;  
  } else {  
    alert("You have entered an invalid email address!");  
    document.form1.text1.focus();  
    return false;
  }
};

//Add Cart
$(function() {
  var count = 0;
  var countText = $('#cart-counter');

  $('.carousel-cell button').on('click', updateCartCount);

  function updateCartCount() {
    count++;
    countText.html(count).show();
  }
})