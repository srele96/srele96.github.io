document.getElementsByClassName('container')[0]
  .addEventListener('mouseenter', toggle);

document.getElementsByClassName('container')[0]
  .addEventListener('mouseleave', toggle);

document.getElementsByClassName('container')[0]
  .addEventListener('click', toggle);

function toggle(e) {
  const teye = document.getElementsByClassName('t-eye')[0];
  const deye = document.getElementsByClassName('d-eye')[0];
  const bottomLip = document.getElementsByClassName('bottom-lip')[0];
  const upperLip = document.getElementsByClassName('upper-lip')[0];
  const mouth = document.getElementsByClassName('mouth')[0];
  const textBubble = document.getElementsByClassName('bubble-text')[0];
  const bubble = document.getElementsByClassName('bubble')[0];

  teye.classList.toggle('cross-t-eye');
  deye.classList.toggle('cross-d-eye');
  bottomLip.classList.toggle('big-smile');
  upperLip.classList.toggle('close-big-smile');
  mouth.classList.toggle('move-smile');
  textBubble.innerHTML = 'Hey! Hover me.';  
  bubble.classList.toggle('bubble-hovered');
}