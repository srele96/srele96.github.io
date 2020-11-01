document.getElementsByClassName('container')[0]
  .addEventListener('mouseenter', e => {
    const teye = document.getElementsByClassName('t-eye')[0];
    const deye = document.getElementsByClassName('d-eye')[0];

    teye.classList.toggle('cross-t-eye');
    deye.classList.toggle('cross-d-eye');

    const bottomLip = document.getElementsByClassName('bottom-lip')[0];
    const upperLip = document.getElementsByClassName('upper-lip')[0];
    bottomLip.classList.toggle('big-smile');
    upperLip.classList.toggle('close-big-smile');

    const mouth = document.getElementsByClassName('mouth')[0];
    mouth.classList.toggle('move-smile');

    const textBubble = document.getElementsByClassName('bubble-text')[0];
    textBubble.innerHTML = 'XDDDDDDDD';

    const bubble = document.getElementsByClassName('bubble')[0];
    bubble.classList.toggle('bubble-hovered');
  });

document.getElementsByClassName('container')[0]
.addEventListener('mouseleave', e => {
  const teye = document.getElementsByClassName('t-eye')[0];
  const deye = document.getElementsByClassName('d-eye')[0];

  teye.classList.toggle('cross-t-eye');
  deye.classList.toggle('cross-d-eye');

  const bottomLip = document.getElementsByClassName('bottom-lip')[0];
  const upperLip = document.getElementsByClassName('upper-lip')[0];
  bottomLip.classList.toggle('big-smile');
  upperLip.classList.toggle('close-big-smile');

  const mouth = document.getElementsByClassName('mouth')[0];
  mouth.classList.toggle('move-smile');

  const textBubble = document.getElementsByClassName('bubble-text')[0];
  textBubble.innerHTML = 'Hey! Hover me.';

  
  const bubble = document.getElementsByClassName('bubble')[0];
  bubble.classList.toggle('bubble-hovered');
});