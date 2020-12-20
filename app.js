// import barba from '@barba/core';
// import gsap from "gsap";

import 'owl.carousel'
import './js/pageTransitioning.js';
import './js/owl-carousels.js';
import './js/headerScript.js';
import anime from 'animejs/lib/anime.es.js';
import AOS from 'aos';


window.onload = function () {
    AOS.init({
        duration: 700,
    });
}

function changeOwlMainHeight() {
    const owlMainItems = document.querySelectorAll(".owl-main__item");
    const owlMainImgHeight = document.querySelector(".owl-main__img").offsetHeight;
    for (let i = 0; i < owlMainItems.length; ++i) {
        owlMainItems[i].style.height = owlMainImgHeight + "px";
    }
}

$(document).ready(function () {


    if (window.innerWidth > 1200) {
        changeOwlMainHeight();

    }

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

var textWrapper = document.querySelector('.owl-main__heading');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

function animatedLetters() {

    anime.timeline({
            loop: false
        })
        .add({
            targets: '.owl-main__heading .letter',
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

let resizeTimer;
$(window).on('resize', function (e) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
        if (window.innerWidth > 1200) {
            changeOwlMainHeight();
        }

    }, 150);
});