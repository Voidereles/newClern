// import barba from '@barba/core';
// import gsap from "gsap";

import 'owl.carousel'
import './js/pageTransitioning.js';
import './js/mainCarousels.js';
import './js/subpageCarousels.js';
import './js/headerScript.js';
import './js/aboutCounter.js'
import anime from 'animejs/lib/anime.es.js';
import AOS from 'aos';


window.onload = function () {
    AOS.init({
        duration: 700,
    });
}



$(document).ready(function () {
    const allLang = document.querySelectorAll(".header__lang-all .text");
    Array.from(allLang).forEach(element => {
        element.addEventListener('click', () => {
            document.querySelector('.header__lang-active-text').innerHTML = element.textContent;
        });
    });

    $('input').focus(function () {
        $(this).parents('.form-group').addClass('focused');
    });

    $('input').blur(function () {
        var inputValue = $(this).val();
        if (inputValue == "") {
            $(this).removeClass('filled');
            $(this).parents('.form-group').removeClass('focused');
        } else {
            $(this).addClass('filled');
        }
    })


});

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