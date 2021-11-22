const phoneexplain = document.querySelector(".phone-explain");
const video = phoneexplain.querySelector("video");
const text = phoneexplain.querySelector("h2");

// SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
    duration: 20000,
    triggerElement: phoneexplain,
    triggerHook: 0
})
    // .addIndicators()
    .setPin(phoneexplain)
    .addTo(controller);


//Phone Scale
const phoneAnim = TweenMax.fromTo(video, 3, {scale: 1, opacity: 1}, {scale : 4.7, opacity: 0.3});

let scene3 = new ScrollMagic.Scene({
    duration: 500,
    triggerElement: phoneexplain,
    triggerHook: 0
})
.setTween(phoneAnim)
.addTo(controller);

//Text Animation    
const textAnim = TweenMax.fromTo(text, 3, {opacity: 0}, {opacity : 1});

let scene2 = new ScrollMagic.Scene({
    duration: 2000,
    triggerElement: phoneexplain,
    triggerHook: 0
})
.setTween(textAnim)
.addTo(controller);

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;

    video.currentTime = delay;
}, 40);

