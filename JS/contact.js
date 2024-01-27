$(document).ready(function () {
  // Regular expressions
  let nameRegex = /^[A-Za-z\s]+$/;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let phoneRegex = /^[0-9\-\(\)\s]+$/;
  let ageRegex = /^[0-9]+$/;
  let passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;

  // Input event handlers
  $('#nameInput').on('keyup', function () {
    validateInput('nameInput', nameRegex, 'nameAlert');
  });

  $('#emailInput').on('keyup', function () {
    validateInput('emailInput', emailRegex, 'emailAlert');
  });

  $('#phoneInput').on('keyup', function () {
    validateInput('phoneInput', phoneRegex, 'phoneAlert');
  });

  $('#ageInput').on('keyup', function () {
    validateInput('ageInput', ageRegex, 'ageAlert');
  });

  $('#passwordInput').on('keyup', function () {
    validateInput('passwordInput', passwordRegex, 'passwordAlert');
  });

  $('#repasswordInput').on('keyup', function () {
    validateRepassword();
  });

  // Validation functions
  function validateInput(inputId, regex, alertId) {
    let inputValue = $('#' + inputId).val();

    if (regex.test(inputValue)) {
      hideAlert(alertId);
    } else {
      showAlert(alertId);
    }

    enableOrDisableSubmitButton();
  }

  function validateRepassword() {
    let passwordValue = $('#passwordInput').val();
    let repasswordValue = $('#repasswordInput').val();

    if (repasswordValue === passwordValue) {
      hideAlert('repasswordAlert');
    } else {
      showAlert('repasswordAlert');
    }

    enableOrDisableSubmitButton();
  }

  // Alert functions
  function showAlert(alertId) {
    $('#' + alertId).removeClass('d-none');
  }

  function hideAlert(alertId) {
    $('#' + alertId).addClass('d-none');
  }

  // Enable or disable submit button
  function enableOrDisableSubmitButton() {
    if (
      $('#nameAlert').hasClass('d-none') &&
      $('#emailAlert').hasClass('d-none') &&
      $('#phoneAlert').hasClass('d-none') &&
      $('#ageAlert').hasClass('d-none') &&
      $('#passwordAlert').hasClass('d-none') &&
      $('#repasswordAlert').hasClass('d-none')
    ) {
      $('#submitButton').attr('disabled', false);
    } else {
      $('#submitButton').prop('disabled', true);
    }
  }
});
