// Navigation

$( window ).scroll(function() {
  $('.nav').css( 'display', 'none' );
});

$( window ).scroll(function() {
  $('.nav-scroll').css( 'display', 'block' );
});

// Intro Toggle

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
})

$('#btn2').on('click', function() {
  showIntro2();
})

$('#btn3').on('click', function() {
  showIntro3();
})
