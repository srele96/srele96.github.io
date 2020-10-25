var scrollWindow = document.getElementById('scrollWindow');
var scrollBackground = document.getElementById('scrollBackground');
var scrollbar = document.getElementById('scrollbar');

scrollWindow.addEventListener('mouseenter', function(e) {
  scrollBackground.classList.toggle('lighterBG');
  scrollbar.classList.toggle('lighterScroll');
});

scrollWindow.addEventListener('mouseleave', function(e) {
  scrollBackground.classList.toggle('lighterBG');
  scrollbar.classList.toggle('lighterScroll');
});

function calculateScrollHeight(totalWindowHeight, totalScrollHeight) {
  // height of scrollbar is proportional to:
  // 2x bigger scroll content has 1/2 window scroll bar height
  // 3x bigger scroll content has 1/3 window scroll bar height
  // ...
  var scrollbarHeight = 
    (totalWindowHeight / totalScrollHeight * totalWindowHeight) + 'px';
  scrollbar.style.height = scrollbarHeight
}

var latestKnownScrollY = 0,
ticking = false,
item = document.getElementById('scrollbar');

function update() {
  // reset the tick so we can
  // capture the next onScroll
  ticking = false;

  item.style.transform = 'translateY(' + latestKnownScrollY + 'px' + ')';
}

function onScroll() {
  var totalScrollHeight = scrollBackground.offsetHeight;
  var totalWindowHeight = scrollWindow.offsetHeight;

  // well just in case...
  calculateScrollHeight(totalWindowHeight, totalScrollHeight);

  // scroll ratio is
  // if content is 2x taller than parent which is 2 to 1 ratio
  // for 2pixel of moved content it means
  // say 100px scroll    / (200px       /  100px      ) gives proper scroll ratio
  //     topScroll       / (totalHeight  /  windowHeight)
  
  latestKnownScrollY = scrollWindow.scrollTop/(totalScrollHeight/totalWindowHeight);
  requestTick();
}

function requestTick() {
  if(!ticking) {
    requestAnimationFrame(update);
  }
  ticking = true;
}

scrollWindow.addEventListener('scroll', onScroll, false);

window.onload = function() {
  calculateScrollHeight(scrollWindow.offsetHeight, scrollBackground.offsetHeight);
}