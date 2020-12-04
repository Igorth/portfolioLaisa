gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();

tl.from('.content', {
    y: '-30%',
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut
})
tl.from('.stagger1', {
    y: -50,
    opacity: 0,
    duration: 2,
    stagger: .3,
    ease: Power4.easeOut
}, "-=1.5")
tl.from('.hero-design', {
    y: 50,
    opacity: 0,
    duration: 2,
    ease: "power4.out"
}, "-=2")

gsap.from('.square-anim', {
    stagger: .2,
    scale: 0.1,
    duration: 1,
    ease: Back.easeOut.config(1,7)
})

gsap.from('.transition2', {
    scrollTrigger: {
        trigger: '.transition2',
        start: 'top bottom'
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: .3
})

gsap.from('.transition3', {
    scrollTrigger: {
        trigger: '.transition3',
        start: 'top bottom'
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: .6
})

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});