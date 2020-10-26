var showVoldemortSlider = document.getElementById('slider');
var wand = document.getElementById('wand');
var avadaKedavra = document.getElementById('avadaKedavra');
var shieldedPotter = document.getElementById('shieldedPotter');
var brokenGlass = document.getElementById('brokenGlass');
var voldemort = document.getElementById('voldemort');
var conversation = document.getElementsByClassName('conversation')[0];

function voldemortGone() {
  voldemort.classList.toggle('gone');
  // reset all at the end
  setTimeout(reset, 1000);
}

function voldemortDisappear() {
  voldemort.classList.toggle('disapper');

  setTimeout(function() {
    voldemortGone();
  },300);
}

function breakVoldemort() {
  brokenGlass.classList.toggle('brokenVoldemort');

  setTimeout(function() {
    voldemortDisappear();
  },500);
}

function shieldPotter() {
  shieldedPotter.classList.toggle('shieldPotter');

  setTimeout(function() {
    shieldedPotter.classList.toggle('shieldPotter');
  },1000);
  setTimeout(function() {
    breakVoldemort();
  },100);
}

function castAvadaKedavra() {
  avadaKedavra.classList.toggle('castAvadaKedavra');

  setTimeout(function() {
    shieldPotter();
  },250);
}

function showVoldemort() {
  showVoldemortSlider.classList.toggle('showVoldemort');
  
  setTimeout(function() {
    castAvadaKedavra();
  },500);
}

function shakeWand() {
  wand.classList.toggle('shakeWand');
  setTimeout(function() {
    wand.classList.toggle('shakeWand');
    showVoldemort();
  },300)
}

document.getElementById('potter').addEventListener('click', function(e) {
  reset();
  shakeWand();
});

function reset() {
  if(wand.classList.contains('shakeWand')) {
    wand.classList.toggle('shakeWand');
  }
  if(showVoldemortSlider.classList.contains('showVoldemort')) {
    showVoldemortSlider.classList.toggle('showVoldemort');
  }
  if(avadaKedavra.classList.contains('castAvadaKedavra')) {
    avadaKedavra.classList.toggle('castAvadaKedavra');
  }
  if(shieldedPotter.classList.contains('shieldPotter')) {
    shieldedPotter.classList.toggle('shieldPotter');
  }
  if(brokenGlass.classList.contains('brokenVoldemort')) {
    brokenGlass.classList.toggle('brokenVoldemort');
  }
  if(voldemort.classList.contains('disapper')) {
    voldemort.classList.toggle('disapper');
  }
  if(voldemort.classList.contains('gone')) {
    voldemort.classList.toggle('gone');
  }
}