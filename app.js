import barba from '@barba/core';
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel'

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

$(document).ready(function () {
    $('.owl-carousel').owlCarousel();
});

function pageTransition() {
    var tl = gsap.timeline();
    tl.to('ul.transition li', {
        duration: .5,
        scaleY: 1,
        transformOrigin: "bottom left",
        stagger: .2
    });
    // stagger - dzieki temu nie bedzie animowalo wszystkich li razem
    tl.to('ul.transition li', {
        duration: .5,
        scaleY: 0,
        transformOrigin: "bottom left",
        stagger: .1,
        delay: .1
    });
}

function delay(n) {
    n = n || 2000;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n);
    });
}

barba.init({
    sync: true,
    transitions: [{
        async leave(data) {
            const done = this.async();
            pageTransition();
            await delay(1500);
            done();

        },
        // https://barba.js.org/docs/advanced/hooks/
        async enter(data) {
            contentAnimation();
        },
        async once(data) {
            contentAnimation();
        }
    }]
});