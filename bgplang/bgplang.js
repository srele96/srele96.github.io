window.onload = function() {
  setHoverAction();
}

function setHoverAction() {
  var symbols = document.getElementsByClassName('symbolWrapper');
  for(var i = 0; i < symbols.length; i++) {
    symbols[i].addEventListener('mouseenter', toggle);
    symbols[i].addEventListener('mouseleave', toggle)
  }
}

function toggle(e) {
  e.target.classList.toggle('hovered')
}

