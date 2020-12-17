// function pageTransition() {
//     var tl = gsap.timeline();
//     tl.to('ul.transition li', {
//         duration: .25,
//         scaleY: 1,
//         transformOrigin: "bottom left",
//         stagger: .2
//     });
//     // stagger - dzieki temu nie bedzie animowalo wszystkich li razem
//     tl.to('ul.transition li', {
//         duration: .25,
//         scaleY: 0,
//         transformOrigin: "bottom left",
//         stagger: .1,
//         delay: .1
//     });
//     console.log('pageTransition');
// }

// function contentAnimation() {
//     var tl = gsap.timeline();
//     tl.from('.left', {
//         duration: 1,
//         translateY: 50,
//         opacity: 0
//     })
//     tl.to('img', {
//         duration: 0.75,
//         clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
//         opacity: 1
//     }, "-=1.1")
//     console.log('contentAnimation');
// }

// function delay(n) {
//     n = n || 2000;
//     console.log('delay');
//     return new Promise(done => {
//         setTimeout(() => {
//             done();
//         }, n);
//     });
// }


// barba.init({
//     sync: true,
//     transitions: [{
//         leave(data) {
//             const done = this.async();
//             console.log('leave');
//             pageTransition();
//             delay(1000);
//             done();
//             console.log('leave');
//         },
//         // https://barba.js.org/docs/advanced/hooks/
//         enter(data) {
//             contentAnimation();
//             console.log('enter');
//         },
//         once(data) {
//             pageTransition();
//             contentAnimation()
//             console.log('once');
//         }
//     }]
// })