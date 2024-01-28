// $('#sidebar-btn').on('click', function () {
//   $('#sidebar').toggleClass('visible');

//   if ($('#sidebar').hasClass('visible')) {
//     $('#nav-link').slideDown(1000);
//     $('#sidebar-outter').animate({ width: '60px', left: '12%' });
//   } else {
//     $('#nav-link').slideUp(1000);
//     $('#sidebar-outter').animate({ width: '5%', left: '0' });
//   }

//   $('#sidebar-btn, #sidebar-exit').toggleClass('d-none');
// });

// $('#sidebar-exit').on('click', function () {
//   $('#sidebar').toggleClass('visible');

//   $('#nav-link').slideUp(1000);
//   $('#sidebar-btn, #sidebar-exit').toggleClass('d-none');
//   $('#sidebar-outter').animate({ width: '5%', left: '0' });
// });

$(function () {
  $('#sidebar-btn').on('click', function () {
    $('#sidebar').toggleClass('visible');
    if ($('#sidebar').hasClass('visible')) {
      $('#sidebar-outter').animate(
        { width: '60px', left: '250px' },
        function () {
          $('#reverseSlide').slideDown(1000);
        }
      );
    } else {
      $('#reverseSlide').slideUp(1000);
      $('#sidebar-outter').animate({ left: '0' });
    }
    $('#sidebar-btn, #sidebar-exit').toggleClass('d-none');
  });

  $('#sidebar-exit').on('click', function () {
    $('#sidebar').toggleClass('visible');
    $('#reverseSlide').slideUp(1000);
    $('#sidebar-btn, #sidebar-exit').toggleClass('d-none');
    $('#sidebar-outter').animate({ left: '0' });
  });
});
