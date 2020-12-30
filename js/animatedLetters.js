import anime from 'animejs/lib/anime.es.js';
var textWrapper = document.querySelector('.animated-heading');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

function animatedLetters() {

    anime.timeline({
            loop: false
        })
        .add({
            targets: '.animated-heading .letter',
            scale: [4, 1],
            opacity: [0, 1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 950,
            delay: (el, i) => 70 * i
        }).add({
            targets: '.ml2',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
}

animatedLetters();