(function(){
  'use strict';

  new WOW().init();

  document.addEventListener('DOMContentLoaded', function() {
    if (typeof anime === 'undefined') return;

    // Animate site title
    if (document.querySelector('.site-title')) {
      anime({
        targets: '.site-title',
        translateY: [-20, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo'
      });
    }

    // Profile image entrance
    if (document.querySelector('.hero-content .img-circle')) {
      anime({
        targets: '.hero-content .img-circle',
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 900,
        delay: 150,
        easing: 'easeOutElastic(1, .6)'
      });
    }

    // Tagline / description
    if (document.querySelector('.hero-content p')) {
      anime({
        targets: '.hero-content p',
        translateY: [10, 0],
        opacity: [0, 1],
        duration: 800,
        delay: 350,
        easing: 'easeOutQuad'
      });
    }

    // Stagger buttons
    if (document.querySelectorAll('.hero-buttons a button').length) {
      anime({
        targets: '.hero-buttons a button',
        translateY: [10, 0],
        opacity: [0, 1],
        delay: anime.stagger(120, { start: 500 }),
        duration: 700,
        easing: 'easeOutBack'
      });
    }

    // Side decoration animation
    if (document.querySelectorAll('.side-decor .dot').length) {
      anime({
        targets: '.side-decor .dot',
        translateY: [0, -14],
        opacity: [0.6, 1],
        duration: 1800,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine',
        delay: anime.stagger(250)
      });
    }

    // Hover microinteractions for buttons and nav links
    function addHoverAnim(el) {
      el.addEventListener('mouseenter', function() {
        anime.remove(el);
        anime({ targets: el, scale: 1.08, duration: 220, easing: 'easeOutQuad' });
      });
      el.addEventListener('mouseleave', function() {
        anime.remove(el);
        anime({ targets: el, scale: 1, duration: 220, easing: 'easeOutQuad' });
      });
      el.addEventListener('mousedown', function() {
        anime.remove(el);
        anime({ targets: el, scale: 0.96, duration: 80, easing: 'easeOutQuad' });
      });
      el.addEventListener('mouseup', function() {
        anime.remove(el);
        anime({ targets: el, scale: 1.08, duration: 80, easing: 'easeOutQuad' });
      });
    }

    // Attach hover animations
    var hoverTargets = document.querySelectorAll('.hero-buttons a button, .navbar-nav > li > a');
    hoverTargets.forEach(function(el){ addHoverAnim(el); });

    // Reveal .section-title when it enters viewport
    var observer = new IntersectionObserver(function(entries, obs) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          anime({
            targets: entry.target,
            translateY: [20, 0],
            opacity: [0, 1],
            duration: 800,
            easing: 'easeOutExpo'
          });
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.section-title').forEach(function(el){ observer.observe(el); });
  });

})();
