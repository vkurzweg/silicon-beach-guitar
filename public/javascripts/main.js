// Navigation

var lastScrollTop = 0;
$( window ).scroll(function() {
  var st = $(this).scrollTop();
     if (st > lastScrollTop){
        $('.nav-brand-image').attr( 'src', 'http://res.cloudinary.com/kurzweg/image/upload/v1498257685/guitartree_green2.png' );
        $('.nav-stripe').css( 'background-color', '#FF49F5' );
        $('.hero-header').css('display', 'none')
        $('.hero-header-scroll').css('display', 'block')

      } else {
        $('.nav-brand-image').attr( 'src', 'http://res.cloudinary.com/kurzweg/image/upload/v1498257685/guitartree_pink.png' );
        $('.nav-stripe').css( 'background-color', '#16FF97' );
        $('.hero-header').css('display', 'block')
        $('.hero-header-scroll').css('display', 'none')
      }
});

// Intro copy buttons

function showIntro1() {
  $('.intro2').css('display', 'none')
  $('.intro3').css('display', 'none')
  $('.intro1').css('display', 'block')
}

function showIntro2() {
  $('.intro1').css('display', 'none')
  $('.intro3').css('display', 'none')
  $('.intro2').css('display', 'block')
}

function showIntro3() {
  $('.intro1').css('display', 'none')
  $('.intro3').css('display', 'block')
  $('.intro2').css('display', 'none')
}

$('#btn1').on('click', function() {
  showIntro1();
  $('#btn1').addClass('btn1')
})

$('#btn2').on('click', function() {
  showIntro2();
  $('#btn1').addClass('btn1-postclick')
  $('#btn1').removeClass('btn1')
})

$('#btn3').on('click', function() {
  showIntro3();
  $('#btn1').addClass('btn1-postclick')
  $('#btn1').removeClass('btn1')
})
