// Cargar las funciones despues que cargue la pagina
window.addEventListener('load', function() {
  // llamar al boton y deshabilitarlo
  var btn = document.getElementById('btn');
  btn.disabled = true;
  var textarea = document.getElementById('letters');
  // al presionar el teclado empezar la funcion que cuenta la cantidad de caracteres
  textarea.addEventListener('keyup', function() {
    // habilitar el boton al escribir 
    btn.disabled = false;
    var max = 140;
    var rest = '';
    var letters = document.getElementById('letters').value.length;
    rest = max - letters;
    document.getElementById('number').value = rest;
    number.innerHTML = rest;
    // cambiar el color segun la cantidad de caracteres 
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
  // al presionar el boton click crear un nuevo div con el valor del textarea 
  btn.addEventListener('click', function() {
    if (textarea.value.length > 0) {
      var storyDiv = document.createElement('div');
      var container = document.createElement('p');
      storyDiv.classList.add('story');
      // funcion de la biblioteca para dar la hora 
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
  // Funcion para agrandar el textarea segun el formato del texto.
  textarea.addEventListener('keyup', function(event) {
    if (event.keyCode = 13) {
      textarea.style.height = (textarea.scrollHeight) + 'px';
    } else if (textarea.value.length >= 171) {
      textarea.style.height = (textarea.scrollHeight) + 'px';
    } else {
      textarea.style = 'initial'; 
    }
  });
});
  