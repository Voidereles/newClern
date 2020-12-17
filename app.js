import barba from '@barba/core';
import gsap from "gsap";

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel'

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import './js/pageTransitioning.js'

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        lazyLoad: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut'
    });
});