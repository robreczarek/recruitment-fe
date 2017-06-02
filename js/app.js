const overlayLeft = document.getElementById('overlay-left');
const overlayRight = document.getElementById('overlay-right');
const overlayLogo = document.getElementById('overlay-logo');
const bgGradient = document.getElementById('bg-gradient');
const bgLines = document.getElementById('bg-lines');
const formSidebar = document.getElementById('form-sidebar');
const formSidebarLines = document.getElementById('form-sidebar-lines');
const formBody = document.getElementById('form-body');

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
  width: ['50%', '55%'],
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

let domformSidebar = anime({
  targets: formSidebar,
  duration: 4000,
  easing: 'linear',
  update: function(anim) {
    $('#form-sidebar').css('clip-path', 'polygon(100% 0%, 100% 100%, ' + (100 - anim.progress) + '% 100%, ' + (100 - anim.progress) + '% 0%)');
    console.log(anim.progress);
    //
  }
});

// let domformSidebarLines = anime({
//   targets: formSidebarLines,
//   easing: 'linear',
//   delay: '2500',
//   width: {
//     value: ['0', '198'],
//     duration: 1000,
//     easing: 'linear'
//   }
// });
//
// let domformBody = anime({
//   targets: formBody,
//   easing: 'linear',
//   delay: '2500',
//   width: {
//     value: ['0', '472'],
//     duration: 1000,
//     easing: 'linear'
//   }
// });
