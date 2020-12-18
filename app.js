import barba from '@barba/core';
import gsap from "gsap";

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel'

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.scss';
import './js/pageTransitioning.js'

function changeOwlMainHeight() {
    const owlMainItems = document.querySelectorAll(".owl-main__item");
    const owlMainImgHeight = document.querySelector(".owl-main__img").offsetHeight;
    for (let i = 0; i < owlMainItems.length; ++i) {
        owlMainItems[i].style.height = owlMainImgHeight + "px";
    }
}

$(document).ready(function () {
    $('.owl-main').owlCarousel({
        lazyLoad: true,
        loop: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        items: 1,
        margin: 0,
        // autoplay: true,
        autoplayTimeout: 5000,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false

    });

    changeOwlMainHeight();
});

let resizeTimer;
$(window).on('resize', function (e) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {

        changeOwlMainHeight();

    }, 150);
});