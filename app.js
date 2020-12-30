// import barba from '@barba/core';
// import gsap from "gsap";
// import './js/map.js';
// import 'lazysizes';
// import a plugin
// import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import AOS from 'aos';
import 'owl.carousel';
import './js/mySticky.js';
import './js/pageTransitioning.js';
import './js/mainCarousels.js';
import './js/subpageCarousels.js';
import './js/headerScript.js';
import './js/aboutCounter.js';
// import './js/animatedLetters.js';
import 'bootstrap';
import stickybits from 'stickybits'


var stickybit = stickybits(".sticky-selector");
stickybits('.purchase__summary', {
    stickyBitStickyOffset: 80
});


window.onload = function () {
    AOS.init({
        duration: 650,
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

    //Go through each carousel on the page
    $('.owl-carousel').each(function () {
        //Find each set of dots in this carousel
        $(this).find('.owl-dot').each(function (index) {
            //Add one to index so it starts from 1
            $(this).attr('aria-label', index + 1);
        });
    });
});