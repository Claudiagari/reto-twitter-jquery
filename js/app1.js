$(document).ready(function() {
  $('#btn').attr('disabled', true);
  $('#letters').keyup(function() {
    $('#btn').attr('disabled', false);
    var max = 140;
    var rest = '';
    var letters = $('#letters').val().length;
    rest = max - letters;
    $('#number').val(rest);
    $('#number').html(rest);
    if ($('#number').val() < 0) {
      btn.disabled = true; 
    } else if ($('#number').val() < 10) {
      number.style.color = 'red';
    } else if (20 > $('#number').val() && $('#number').val() >= 10) {
      number.style.color = 'blue';
    } else {
      number.style.color = 'black';
    }
  });
  $('#btn').click(function() {
    if ($('#letters').val().length > 0) {
      var storyDiv = $('<div>', {'class': 'story' });
      var container = $('<p>');
      var time = moment().format('LT');
      var text = $('#letters').val();
      container.html(time);
      storyDiv.text(text);
      storyDiv.append(container);
      $('body').append(storyDiv);
      $('#letters').val('');
      $('#number').text('140');
      $('#number').css('color', 'black');
      $('#btn').attr('disabled', true);
      $('#letters').css('initial');
    } else {
      $('#btn').attr('disabled', true);
    }
  });
});
    

