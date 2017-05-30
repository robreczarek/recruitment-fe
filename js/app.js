const overlayLeft = document.querySelector('#overlay-left');
const overlayRight = document.querySelector('#overlay-right');
const overlayLogo = document.querySelector('#overlay-logo');

let domNodeOverlayLeft = anime({
  targets: overlayLeft,
  translateX: '45vw',
  width: '0',
  easing: 'easeOutQuint',
  delay: '1500',
  complete: function() {
    anime({
      targets: overlayLeft,
      opacity: '0'
    });
  }
});

let domNodeOverlayRight = anime({
  targets: overlayRight,
  width: '0',
  easing: 'easeOutQuint',
  delay: '1500',
  complete: function() {
    anime({
      targets: overlayRight,
      opacity: '0'
    });
  }
});

let domNodeOverlayLogo = anime({
  targets: overlayLogo,
  opacity: '0',
  easing: 'easeOutQuint',
  delay: '1200',
  complete: function() {
    anime({
      targets: overlayLogo,
      opacity: '0'
    });
  }
});
