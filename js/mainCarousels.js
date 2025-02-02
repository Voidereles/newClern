$(document).ready(function () {
    var time = 5; // time in seconds

    var $progressBar,
        $bar,
        $elem,
        isPause,
        tick,
        percentTime;

    function progressBar(elem) {
        $elem = elem;
        buildProgressBar();
        start();
    }

    function buildProgressBar() {
        $progressBar = $("<div>", {
            class: "progressBar"
        });
        $bar = $("<div>", {
            class: "bar"
        });
        $progressBar.append($bar).appendTo($(" .owl-testimonials .owl-dots .active, .owl-main .owl-dots .active"));

    }

    function moved() {
        $(".progressBar").remove();
        buildProgressBar();
        clearTimeout(tick);
        start();
    }

    var owlMain = $(".owl-main");
    var owlTestimonials = $(".owl-testimonials");

    function counter(event) {
        var items = event.item.count;
        var item = event.item.index + 2;

        if (item > items) {
            item = item - items
        }

        if (item == 4) {
            item = 1;
        }
        $('.main-counter').html('<span class="main-counter__number">' + item + '</span><span class="main-counter__slash">/ </span>' +
            '<span class="main-counter__total">' + items + '</span>')
    }

    owlMain.on('initialized.owl.carousel', function (event) {
        // $('.owl-main .owl-dots .active').insertAdjacentHTML('<div class="main-counter">dasdas</div>');
        counter(event);

        changeOwlMainHeight();
    });

    owlMain.on('translate.owl.carousel', function (event) {
        counter(event);
    });

    owlMain.owlCarousel({
        onInitialized: progressBar,
        onTranslate: moved,
        onResize: changeOwlMainHeight,
        nav: false,
        dots: true,
        items: 1,
        responsiveClass: true,
        responsive: {
            0: {
                dots: false,
            },
            600: {
                dots: true,
            }
        },
        lazyLoad: true,
        loop: true,
        // animateIn: 'fadeIn',
        // animateOut: 'fadeOut',
        margin: 32,
        autoplay: true,
        autoplay: false,
        autoplayTimeout: 5000,
        // mouseDrag: false,
        // touchDrag: false,
        // pullDrag: false
    });



    owlTestimonials.owlCarousel({
        // autoplayHoverPause: true,
        onInitialized: moved,
        onTranslate: moved,
        loop: true,
        nav: true,
        dots: true,
        nav: true,
        lazyLoad: true,
        items: 1
    });

    function changeOwlMainHeight() {

        if (window.innerWidth > 1200) {
            const owlMainItems = document.querySelectorAll(".owl-main__item");
            const owlMainImgHeight = document.querySelector(".owl-main__img").offsetHeight;
            for (let i = 0; i < owlMainItems.length; ++i) {
                owlMainItems[i].style.height = owlMainImgHeight + "px";
            }
        }
    }


    function interval() {
        if (isPause === false) {
            percentTime += 1 / time;
            //reset timer
            $(".bar").css({
                width: percentTime + "%"
            });
            //if percentTime is equal or greater than 100
            if (percentTime >= 100) {
                //slide to next item 
                $(".owl-main").trigger('next.owl.carousel');
                $(".owl-testimonials").trigger('next.owl.carousel');
            }
        }
    }

    function start() {
        percentTime = 0;
        isPause = false;
        // isPause = true;


        //run interval every 10 miliseconds
        tick = setInterval(interval, 10);
    };
    // owlMain.on('mouseover', function () {
    //     isPause = true;
    // });
    // owlMain.on('mouseout', function () {
    //     isPause = false;
    // });
    owlTestimonials.on('mouseover', function () {
        isPause = true;
    });
    owlTestimonials.on('mouseout', function () {
        isPause = false;
    });

    $('.owl-offer').owlCarousel({
        loop: true,
        margin: 10,
        // autoplay: true,
        autoplay: false,
        nav: false,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                stagePadding: 48,
            },
            600: {
                items: 2,
                nav: false,
                stagePadding: 72,
            },
            992: {
                items: 4,
                nav: false,
                loop: true
            },
            1440: {
                items: 5,
                nav: false,
                loop: false,
            }
        }
    })

    $('.owl-news').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
                dots: false,
                nav: false,
                stagePadding: 48,
            },
            600: {
                items: 2,
                dots: false,
                nav: false
            },
            992: {
                items: 3,
                dots: false,
                nav: false
            }
        }
    })




});