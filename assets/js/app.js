$(document).ready(function() {
  $('#contactForm').on('submit', function(e) {
    e.preventDefault();

    var form   = $(this);
    var button = form.find("button[type='submit']");

    button.prop('disabled', true);

    $.ajax({
      method: 'post',
      url: 'https://hansy-api.herokuapp.com/contact',
      data: form.serialize(),
      dataType: 'json',
      complete: function() {
        form[0].reset();
        button.prop('disabled', false);
        $('.form__message').html('Message sent!');
      }
    });
  });
});