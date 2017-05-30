const overlayLeft = document.getElementById('overlay-left');
const overlayRight = document.getElementById('overlay-right');
const overlayLogo = document.getElementById('overlay-logo');

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
