const chevron = document.querySelector('.menu-chevron');
const bigtext = document.querySelector('.headline');
const screeny = document.querySelector('.curtain');
const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu-tray');
const headertext = document.querySelector('.caption')

chevron.addEventListener("click", ()=>{
    bigtext.classList.toggle("sendback");
})

chevron.addEventListener("click", ()=>{
    chevron.classList.toggle("change");
    screeny.classList.toggle('fade-in');
    nav.classList.toggle('expand');
    menu.classList.toggle('reveal');
});

const stickyvideo = document.querySelector('#explainer-video');
const video = document.querySelector("video");


var controller = new ScrollMagic.Controller();

let myScene = new ScrollMagic.Scene({
    duration: 700,
    triggerElement: stickyvideo,
    triggerHook: 0
})

    .addIndicators()
    .setPin(stickyvideo)
    .addTo(controller);



const phoneAnim = TweenMax.fromTo(video, 3, {scale: 1}, {scale : 0.5});

let myScene2 = new ScrollMagic.Scene({
    duration: 650,
    triggerElement: bigtext,
    triggerHook: 0

})
.setTween(phoneAnim)
.addTo(controller);




