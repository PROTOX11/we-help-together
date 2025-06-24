const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function loadinganimation() {
    gsap.from("#page1 h1", {
        y: 30,
        opacity: 0,
        delay: 0.5,
        duration: 0.8,
        stagger: 0.2,
    });
}
loadinganimation();

function loadinghunline() {
    gsap.from("#hunline", {
        x: -40,
        opacity: 0,
        delay: 0.5,
        duration: 0.8,
        stagger: 0.2,
    });
}
loadinghunline();

function loadingvideo() {
    gsap.from("#page1 #video-container", {
        x: 40,
        opacity: 0.2,
        delay: 0.2,
        duration: 0.8,
        stagger: 0.2,
    });
}
loadingvideo();

function trivideo() {
    // Updated selector to use class instead of id for videocont
    gsap.from("#vidone .videocont", {
        x: 40,
        opacity: 0.2,
        delay: 0.2,
        duration: 0.8,
        stagger: 0.2,
    });
}
trivideo();

// Refresh LocomotiveScroll after animations or DOM changes
scroll.update();
