const overlayLeft = document.getElementById('overlay-left');
const overlayRight = document.getElementById('overlay-right');
const overlayLogo = document.getElementById('overlay-logo');
const bgGradient = document.getElementById('bg-gradient');
const bgLines = document.getElementById('bg-lines');

let domNodeOverlayLeft = anime({
  targets: overlayLeft,
  translateX: '45vw',
  width: '0',
  easing: 'easeOutQuint',
  delay: '1500',
  complete: () => {
    overlayLeft.remove();
  }
});

let domNodeOverlayRight = anime({
  targets: overlayRight,
  width: '0',
  easing: 'easeOutQuint',
  delay: '1500',
  complete: () => {
    overlayRight.remove();
  }
});

let domNodeOverlayLogo = anime({
  targets: overlayLogo,
  opacity: '0',
  easing: 'easeOutQuint',
  delay: '1200',
  complete: () => {
    overlayLogo.remove();
  }
});

let domNodeBgGradient = anime({
  targets: bgGradient,
  width: ['40%', '45%'],
  easing: 'linear',
  delay: '1500',
  duration: '4000'
});

let domNodebgLines = anime({
  targets: bgLines,
  easing: 'linear',
  delay: '1500',
  rotate: {
    value: [5, 0],
    duration: 1800,
    easing: 'linear'
  },
  width: {
    value: ['90%', '100%'],
    duration: 1800,
    easing: 'linear'
  }
});
