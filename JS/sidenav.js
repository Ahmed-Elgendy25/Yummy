$(document).ready(function () {
  $('#sidebar-btn').on('click', function () {
    $('#sidebar').toggleClass('visible');

    if ($('#sidebar').hasClass('visible')) {
      $('#sidebar-outter').animate({ width: '60px', left: '12%' });
    } else {
      $('#sidebar-outter').animate({ width: '5%', left: '0' });
    }
  });
});
