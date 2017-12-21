window.addEventListener('load', function() {
  var btn = document.getElementById('btn');
  btn.disabled = true;
  var textarea = document.getElementById('letters');
  textarea.addEventListener('keyup', function() {
    btn.disabled = false;
    var max = 140;
    var rest = '';
    var letters = document.getElementById('letters').value.length;
    rest = max - letters;
    document.getElementById('number').value = rest;
    number.innerHTML = rest;
    if (number.value < 0) {
      btn.disabled = true;
    } else if (number.value < 10) {
      number.style.color = 'red';
    } else if (20 > number.value && number.value >= 10) {
      number.style.color = 'blue';
    } else {
      number.style.color = 'black';
    }
  });
  btn.addEventListener('click', function() {
    if (textarea.value.length > 0) {
      var storyDiv = document.createElement('div');
      var container = document.createElement('p');
      storyDiv.classList.add('story');
      var time = moment().format('LT');
      container.innerHTML = time;
      var text = document.getElementById('letters').value;
      storyDiv.innerHTML = text;
      storyDiv.appendChild(container)
      document.body.appendChild(storyDiv);
      textarea.value = '';
      document.getElementById('number').textContent = '140';
      document.getElementById('number').style = 'black';
      btn.disabled = true;
      textarea.style = 'initial';
    } else {
      btn.disabled = true;
    }
  });
  textarea.addEventListener('keyup', function() {
    if (keyCode = 13) {
      textarea.style.height = (textarea.scrollHeight) + 'px';
    } else if (textarea.value.length >= 171) {
      textarea.style.height = (textarea.scrollHeight) + 'px';
    }
  });
});
