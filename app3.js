const chevron = document.querySelector('.menu-chevron');
const bigtext = document.querySelector('.headline');
const screeny = document.querySelector('.curtain');
const nav = document.querySelector('.nav');
const navcta = document.querySelector('.menu');
const menu = document.querySelector('.menu-tray');
const menulist = document.querySelector('.menu-tray li')
const headertext = document.querySelector('.caption')

chevron.addEventListener("click", ()=>{
    // bigtext.classList.toggle("sendback");
})

chevron.addEventListener("click", ()=>{
    chevron.classList.toggle("change");
    screeny.classList.toggle('fade-in');
    nav.classList.toggle('expand');
    menu.classList.toggle('reveal');
    // menulist.classList.toggle('slide-in');
});

menu.addEventListener("click", () =>{
    chevron.classList.remove('change');
    screeny.classList.remove('fade-in');
    nav.classList.remove('expand');
    menu.classList.remove('reveal');
    // bigtext.classList.remove("sendback");
})

screeny.addEventListener("click", ()=>{
    chevron.classList.remove('change');
    screeny.classList.remove('fade-in');
    nav.classList.remove('expand');
    menu.classList.remove('reveal');
    // bigtext.classList.remove("sendback");
})

// navcta.addEventListener("click", ()=>{
//     chevron.classList.remove('change');
//     screeny.classList.remove('fade-in');
//     nav.classList.remove('expand');
//     menu.classList.remove('reveal');
// })

window.addEventListener('scroll', ()=>{
    chevron.classList.remove('change');
    screeny.classList.remove('fade-in');
    nav.classList.remove('expand');
    menu.classList.remove('reveal');
})

//The code snippet below works for video autoplay when battery is low with user gesture
document.body.addEventListener("touchstart", function () {
    var allVideos = document.querySelectorAll('video');
    for (var i = 0; i < allVideos.length; i++) {
        allVideos[i].play();
    }
},{ once: true });
//autoplay user guesture ends

let animatorInterval;
function innerTextRender(){
    // console.log(window.innerW)
    if (animatorInterval != null){
        clearInterval(animatorInterval)
    }
    //code for slider text animation
let innerTexts = document.querySelectorAll('.text-wrapper .innerText');
if(innerTexts)
{
    innerTexts.forEach(innerText=>{
        // make clone of first child start
        // let firstText = innerText.firstElementChild.cloneNode('true');
        // innerText.appendChild(firstText);
        // make clone of first child start
        
        let i           = 0,
            speed       = 1500,
            distance    = window.innerWidth > 1000 ? 120 : (window.innerWidth > 319 ? 74 : 70);

        animatorInterval = setInterval(()=>{
            let step = innerText.childElementCount;
            innerText.style.transform = `translateY(-${distance * i}px)`;
            innerText.style.transition = "0.5s ease-in-out";

            if (i==step)
            {
                innerText.style.transition = "0s";
                innerText.style.transform = `translateY(0px)`;
            }

            //now change the value of i
            i = (i<step) ? (i+1) : 1;
        }, speed);
    })
}
}

innerTextRender()
window.addEventListener('resize', innerTextRender)


//Slide text animation ends

//Slider text animation responsive
const mediaQuery = window.matchMedia('(min-width: 768px)')

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    console.log('Media Query Matched!')
  }
}

// Register event listener
mediaQuery.addListener(handleTabletChange)

// Initial check
handleTabletChange(mediaQuery)








// const stickyvideo = document.querySelector('#explainer-video');
// const video = document.querySelector("video");


// var controller = new ScrollMagic.Controller();

// let myScene = new ScrollMagic.Scene({
//     duration: 1000,
//     // triggerElement: stickyvideo,
//     // triggerHook: 0
// })

//     // .addIndicators()
//     .setPin(stickyvideo)
//     // .addTo(controller);



// const phoneAnim = TweenMax.fromTo(video, 3, {scale: 1}, {scale : 0.5});

// let myScene2 = new ScrollMagic.Scene({
//     duration: 650,
//     triggerElement: bigtext,
//     triggerHook: 0

// })
// .setTween(phoneAnim)
// .addTo(controller);

gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.config({
//     autoRefreshEvents: "visibilitychange,DOMContentLoaded,load" // notice "resize" isn't in the list
//   });


//headline animation

gsap.to(".headline", {
    autoAlpha: 0,
    duration: 0.3,
    scrollTrigger: {
        trigger: ".headline",
        start: "top 0%",
        end: "bottom 50%",
        // markers: true,
        pin: "#explainer-video",
        scrub: true
    } 
})

gsap.to(".scroll", {
    autoAlpha: 0,
    duration: 0.3,
    scrollTrigger: {
        trigger: ".scroll",
        start: "top 90%",
        end: "top 80%",
        toggleActions: "restart none none reverse",
        // markers: true,
        // pin: "#explainer-video",
        // scrub: true
    } 
})

gsap.to(".dreads-scroll", {
    autoAlpha: 0,
    duration: 0.3,
    scrollTrigger: {
        trigger: ".dreads-scroll",
        start: "top 80%",
        end: "top 70%",
        toggleActions: "restart none none reverse",
        // markers: true,
        // pin: "#explainer-video",
        // scrub: true
    } 
})

// gsap.to(".headline", {
//     autoAlpha: 0,
//     y: -150,
//     duration: 0.4,
//     scrollTrigger: {
//         trigger: ".pre-text",
//         start: "0% 25%",
//         end: "0% 50%",
//         toggleActions: "restart none none reverse",
//         // markers: true,
//         // pin: "#explainer-video",
//         // scrub: true
//     } 
// })

//fullscreen scale

gsap.to("#explainer-video",  {
    scale: 0.4,
    borderRadius: 30,
    duration: 0.3,
    scrollTrigger: {
        trigger: "#explainer-video",
        start: "0.1% top",
        // endTrigger: ".how-to",
        end: "bottom 50%",
        // markers: true,
        pin: true,
        pinType: "fixed",
        pinSpacing: true,
        scrub: 0.2
    }
})



// gsap.to(".memoji-front", {
//     duration: 0.3,
//     scrollTrigger: {
//         trigger: ".how-to",
//         start: "top top",
//         end: "100% top",
//         markers: true,
//         pin: ".memoji-front"
//     }
// })

// gsap.to(".durag-guy", {
//     y: 120,
//     x: -400,
//     duration: 1,
//     scrollTrigger{
//         trigger: "#explainer-video",
//         start: "0% top",
//         end: "bottom 0%",
//         markers:
//     }
// })


//ORIGINAL



ScrollTrigger.matchMedia({
//desktop
"(min-width: 897px)": function(){

    // gsap.to(".bg-video", {
    //     duration: 0.3,
    //     scrollTrigger: {
    //         trigger: ".how-to",
    //         start: "0.3% top",
    //         // endTrigger: ".how-to",
    //         end: "100% 8%",
    //         // markers: {startColor: "blue", endColor: "blue"},
    //         pin: "#explainer-video"
    //     }
    // })

    gsap.to("#explainer-video", {
        duration: 0.3,
        scrollTrigger: {
            trigger: "#explainer-video",
            start: "0.3% top",
            // endTrigger: ".how-to",
            end: "100% 50%",
            // markers: {startColor: "blue", endColor: "blue"},
            pin: true,
            scrub: true
        }
    });

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".name-1",
            start: "top 45%",
            end: "top 30%",
            // markers: true,
            pin: true,
            scrub: 0.4
        }
    });
    
    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".name-2",
            start: "top 45%",
            end: "top 30%",
            // markers: true,
            pin: true,
            scrub: 0.4
        }
    });
    
    const tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".name-3",
            start: "top 45%",
            end: "bottom 30%",
            // markers: true,
            pin: true,
            scrub: 0.4
        }
    });
    
    const tl3b = gsap.timeline({
        scrollTrigger: {
            trigger: ".animated-button",
            start: "top 42%",
            end: "top 42%",
            toggleActions: "restart none none reverse",
            // markers: true,
            pin: true
            // scrub: 0.4
        }
    });
    
    const tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".memoji-front",
            start: "0% top",
            end: "116% 0%",
            // markers: true,
            pin: true,
            scrub: 0.3
        }
    })

    const tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: ".memoji-front",
            start: "0% top",
            end: "116% 0%",
            pin: true,
            // markers: true,
            scrub: 0.3
        }
    })

    const tl6 = gsap.timeline({
        scrollTrigger: {
            trigger: ".memoji-front",
            start: "0% top",
            end: "116% 0%",
            pin: true,
            // markers: true,
            scrub: 0.3
        }
    })

    const tl7 = gsap.timeline({
        scrollTrigger: {
            trigger: ".memoji-front",
            start: "0% top",
            end: "116% 0%",
            pin: true,
            // markers: true,
            scrub: 0.3
        }
    })

    const tl8 = gsap.timeline({
        scrollTrigger: {
            trigger: ".memoji-front",
            start: "0% top",
            end: "116% 0%",
            pin: true,
            // markers: true,
            scrub: 0.3
        }
    })

    const tl9 = gsap.timeline({
        scrollTrigger: {
            trigger: ".memoji-front",
            start: "0% top",
            end: "116% 0%",
            pin: true,
            // markers: true,
            scrub: 0.4
        }
    })
    
    const tl10 = gsap.timeline({
        scrollTrigger: {
            trigger: ".memoji-back",
            start: "0% top",
            end: "100% 0%",
            // pin: true,
            // markers: true,
            scrub: 4
        }
    })
    
    const tl11 = gsap.timeline({
        scrollTrigger: {
            trigger: ".memoji-back",
            start: "0% top",
            end: "100% 0%",
            // markers: true,
            scrub: 4
        }
    })
    
    const tl12 = gsap.timeline({
        scrollTrigger: {
            trigger: ".memoji-back",
            start: "0% top",
            end: "100% 0%",
            pin: true,
            scrub: 4
        }
    })

    const lazyBreaker = gsap.timeline({
        scrollTrigger: {
            trigger: ".breaker-text",
            start: "0% 98%",
            end: "0% 80%",
            // markers: true,
            scrub: 0.3
        }
    })

    const lazyMidButton = gsap.timeline({
        scrollTrigger: {
            trigger: ".mid-button",
            start: "0% 95%",
            end: "0% 95%",
            // markers: true,
            // scrub: true
        }
    })

    const bgFaded = gsap.timeline({
        scrollTrigger: {
            trigger: ".bg-video",
            start: "0% 95%",
            end: "0% 95%",
            // markers: true,
            // scrub: true
        }
    })

    const lazyVpTitle1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".lazy-vp-title1",
            start: "0% 75%",
            end: "0% 75%",
            // markers: true,
            // scrub: true
        }
    })

    const lazyVpHeading1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".lazy-vp-heading1",
            start: "0% 75%",
            end: "0% 75%",
            // markers: true,
            // scrub: true
        }
    })

    const lazyVpBody1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".lazy-vp-body1",
            start: "0% 75%",
            end: "0% 75%",
            // markers: true,
            // scrub: true
        }
    })

    const lazyVpPhone1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".lazy-vp-phone1",
            start: "0% 65%",
            end: "0% 65%",
            // markers: true,
            // scrub: true
        }
    })

    const lazyVpTitle2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".lazy-vp-title2",
            start: "0% 75%",
            end: "0% 75%",
            // markers: true,
            // scrub: true
        }
    })

    const lazyVpHeading2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".lazy-vp-heading2",
            start: "0% 75%",
            end: "0% 75%",
            // markers: true,
            // scrub: true
        }
    })

    const lazyVpBody2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".lazy-vp-body2",
            start: "0% 75%",
            end: "0% 75%",
            // markers: true,
            // scrub: true
        }
    })

    const lazyVpPhone2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".lazy-vp-phone2",
            sstart: "0% 65%",
            end: "0% 65%",
            // markers: true,
            // scrub: true
        }
    })

    const lazyVpTitle3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".lazy-vp-title3",
            start: "0% 75%",
            end: "0% 75%",
            // markers: true,
            // scrub: true
        }
    })

    const lazyVpHeading3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".lazy-vp-heading3",
            start: "0% 75%",
            end: "0% 75%",
            // markers: true,
            // scrub: true
        }
    })

    const lazyVpBody3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".lazy-vp-body3",
            start: "0% 75%",
            end: "0% 75%",
            // markers: true,
            // scrub: true
        }
    })

    const lazyVpPhone3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".lazy-vp-phone3",
            start: "0% 65%",
            end: "0% 65%",
            // markers: true,
            // scrub: true
        }
    })
    
    tl.to(".name-1", {y: 0, opacity: 1, duration: 2})
        .to(".name-1", {y: 0, opacity: 0, duration: 1})
    
    tl2.to(".name-2", {y: 0, opacity: 1, duration: 2})
        .to(".name-2", {y: 0, opacity: 0, duration: 1})
    
    tl3.to(".name-3", {y: 0, opacity: 1, duration: 2})
        .to(".name-3", {y: 0, opacity: 0, duration: 1})
    
        tl3b.to(".animated-button", {y: 0, autoAlpha: 0, duration: 0.2})
        .to(".animated-button", {y: 0, autoAlpha: 1, duration: 0.2})
    
    tl4.to(".durag-guy", {x: -200, y: 130, duration: 0.3})
    
    tl5.to(".bald-babe", {x: 140, y: 230, duration: 0.5})
    
    tl6.to(".hat-man", {x: 320, y: 190, duration: 0.5})
    
    tl7.to(".braid-babe", {x: -550, y: -100, duration: 0.5})
    
    tl8.to(".dreads", {x: 600, y: -100, duration: 0.5})
    
    tl9.to(".mask-chic", {x: -380, y: -300, duration: 0.5})
    
    tl10.to(".clean-cut", {x: 0, y: 100, duration: 0.5})
    
    tl11.to(".asian-guy", {x: -200, y: -150, duration: 0.5})
    
    tl12.to(".hijab-babe", {x: 300, y: -200, duration: 0.5})

    lazyBreaker.to(".breaker-text", {y: -50, opacity: 1, duration: 0.8})

    lazyMidButton.to(".mid-button", {y: -10, opacity: 1, duration: 1})

    bgFaded.to(".bg-faded", {opacity: 1, duration: 0.2})

    lazyVpTitle1.to(".lazy-vp-title1", {y: -50, opacity: 1, duration: 0.8})

    lazyVpHeading1.to(".lazy-vp-heading1", {y: -50, opacity: 1, duration: 0.8})

    lazyVpBody1.to(".lazy-vp-body1", {y: -50, opacity: 1, duration: 0.8})

    lazyVpPhone1.to(".lazy-vp-phone1", {y: -50, opacity: 1, duration: 0.8})

    lazyVpTitle2.to(".lazy-vp-title2", {y: -50, opacity: 1, duration: 0.8})

    lazyVpHeading2.to(".lazy-vp-heading2", {y: -50, opacity: 1, duration: 0.8})

    lazyVpBody2.to(".lazy-vp-body2", {y: -50, opacity: 1, duration: 0.8})

    lazyVpPhone2.to(".lazy-vp-phone2", {y: -50, opacity: 1, duration: 0.8})

    lazyVpTitle3.to(".lazy-vp-title3", {y: -50, opacity: 1, duration: 0.8})

    lazyVpHeading3.to(".lazy-vp-heading3", {y: -50, opacity: 1, duration: 0.8})

    lazyVpBody3.to(".lazy-vp-body3", {y: -50, opacity: 1, duration: 0.8})

    lazyVpPhone3.to(".lazy-vp-phone3", {y: -50, opacity: 1, duration: 0.8})

},

"(max-width: 896px)": function(){

    gsap.to("#explainer-video", {
        duration: 0.3,
        scrollTrigger: {
            trigger: "#explainer-video",
            start: "0.3% top",
            // endTrigger: ".how-to",
            end: "100% 50%",
            // markers: {startColor: "blue", endColor: "blue"},
            pin: true,
            scrub: true
        }
    });

    // gsap.to(".names"), {
    //     scroll
    // }

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".name-1",
            start: "top 45%",
            end: "top 30%",
            // markers: true,
            pin: true,
            scrub: 0.4
        }
    });

    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".name-2",
            start: "top 45%",
            end: "top 30%",
            // markers: true,
            pin: true,
            scrub: 0.4
        }
    });

    const tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".name-3",
            start: "top 45%",
            end: "top 30%",
            // markers: true,
            pin: true,
            scrub: 0.4
        }
    });

    const tl3b = gsap.timeline({
        scrollTrigger: {
            trigger: ".animated-button",
            start: "top 42%",
            end: "top 42%",
            toggleActions: "restart none none reverse",
            // markers: true,
            pin: true
            // scrub: 0.4
        }
    });

    const tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".memoji-front",
            start: "0% top",
            end: "125% 0%",
            // markers: true,
            pin: true,
            scrub: 0.3
        }
    })

    const tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: ".memoji-front",
            start: "0% top",
            end: "125% 0%",
            pin: true,
            // markers: true,
            scrub: 0.3
        }
    })

    const tl6 = gsap.timeline({
        scrollTrigger: {
            trigger: ".memoji-front",
            start: "0% top",
            end: "125% 0%",
            pin: true,
            // markers: true,
            scrub: 0.3
        }
    })

    const tl7 = gsap.timeline({
        scrollTrigger: {
            trigger: ".memoji-front",
            start: "0% top",
            end: "125% 0%",
            pin: true,
            // markers: true,
            scrub: 0.3
        }
    })

    const tl8 = gsap.timeline({
        scrollTrigger: {
            trigger: ".memoji-front",
            start: "0% top",
            end: "125% 0%",
            pin: true,
            // markers: true,
            scrub: 0.3
        }
    })

    const tl9 = gsap.timeline({
        scrollTrigger: {
            trigger: ".memoji-front",
            start: "0% top",
            end: "125% 0%",
            pin: true,
            // markers: true,
            scrub: 0.4
        }
    })

    const lazyBreaker = gsap.timeline({
        scrollTrigger: {
            trigger: ".breaker-text",
            start: "0% 98%",
            end: "0% 75%",
            // toggleActions: "restart none none reverse",
            // markers: true,
            scrub: 0.3
        }
    })

    const lazyMidButton = gsap.timeline({
        scrollTrigger: {
            trigger: ".mid-button",
            start: "0% 95%",
            end: "0% 95%",
            // markers: true,
            // scrub: true
        }
    })

    const bgFaded = gsap.timeline({
        scrollTrigger: {
            trigger: ".bg-video",
            start: "0% 95%",
            end: "0% 95%",
            // markers: true,
            // scrub: true
        }
    })

    const lazyVpTitle1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".lazy-vp-title1",
            start: "0% 95%",
            end: "0% 95%",
            // markers: true,
            // scrub: true
        }
    })

    const lazyVpHeading1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".lazy-vp-heading1",
            start: "0% 95%",
            end: "0% 95%",
            // markers: true,
            // scrub: true
        }
    })

    const lazyVpBody1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".lazy-vp-body1",
            start: "0% 95%",
            end: "0% 95%",
            // markers: true,
            // scrub: true
        }
    })

    const lazyVpPhone1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".lazy-vp-phone1",
            start: "0% 70%",
            end: "0% 70%",
            // markers: true,
            // scrub: true
        }
    })

    const lazyVpTitle2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".lazy-vp-title2",
            start: "0% 95%",
            end: "0% 95%",
            // markers: true,
            // scrub: true
        }
    })

    const lazyVpHeading2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".lazy-vp-heading2",
            start: "0% 95%",
            end: "0% 95%",
            // markers: true,
            // scrub: true
        }
    })

    const lazyVpBody2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".lazy-vp-body2",
            start: "0% 95%",
            end: "0% 95%",
            // markers: true,
            // scrub: true
        }
    })

    const lazyVpPhone2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".lazy-vp-phone2",
            start: "0% 70%",
            end: "0% 70%",
            // markers: true,
            // scrub: true
        }
    })

    const lazyVpTitle3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".lazy-vp-title3",
            start: "0% 95%",
            end: "0% 95%",
            // markers: true,
            // scrub: true
        }
    })

    const lazyVpHeading3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".lazy-vp-heading3",
            start: "0% 95%",
            end: "0% 95%",
            // markers: true,
            // scrub: true
        }
    })

    const lazyVpBody3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".lazy-vp-body3",
            start: "0% 95%",
            end: "0% 95%",
            // markers: true,
            // scrub: true
        }
    })

    const lazyVpPhone3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".lazy-vp-phone3",
            start: "0% 70%",
            end: "0% 70%",
            // markers: true,
            // scrub: true
        }
    })

    tl.to(".name-1", {y: 0, opacity: 1, duration: 2})
        .to(".name-1", {y: 0, opacity: 0, duration: 1})

    tl2.to(".name-2", {y: 0, opacity: 1, duration: 2})
        .to(".name-2", {y: 0, opacity: 0, duration: 1})

    tl3.to(".name-3", {y: 0, opacity: 1, duration: 2})
        .to(".name-3", {y: 0, opacity: 0, duration: 1})

    tl3b.to(".animated-button", {y: 0, autoAlpha: 0, duration: 0.2})
        .to(".animated-button", {y: 0, autoAlpha: 1, duration: 0.2})

    tl4.to(".durag-guy", {x: -130, y: 70, duration: 0.3})

    tl5.to(".bald-babe", {x: 40, y: 40, duration: 0.5})

    tl6.to(".hat-man", {x: 120, y: 90, duration: 0.5})

    tl7.to(".braid-babe", {x: -100, y: 100, duration: 0.5})

    tl8.to(".dreads", {x: 250, y: -100, duration: 0.5})

    tl9.to(".mask-chic", {x: -130, y: -150, duration: 0.5})

    lazyBreaker.to(".breaker-text", {y: 0, opacity: 1, duration: 0.8})

    lazyMidButton.to(".mid-button", {y: -10, opacity: 1, duration: 1})

    bgFaded.to(".bg-faded", {opacity: 1, duration: 0.2})

    lazyVpTitle1.to(".lazy-vp-title1", {y: -30, opacity: 1, duration: 0.8})

    lazyVpHeading1.to(".lazy-vp-heading1", {y: -30, opacity: 1, duration: 0.8})

    lazyVpBody1.to(".lazy-vp-body1", {y: -30, opacity: 1, duration: 0.8})

    lazyVpPhone1.to(".lazy-vp-phone1", {y: -30, opacity: 1, duration: 0.8})

    lazyVpTitle2.to(".lazy-vp-title2", {y: -30, opacity: 1, duration: 0.8})

    lazyVpHeading2.to(".lazy-vp-heading2", {y: -30, opacity: 1, duration: 0.8})

    lazyVpBody2.to(".lazy-vp-body2", {y: -30, opacity: 1, duration: 0.8})

    lazyVpPhone2.to(".lazy-vp-phone2", {y: -30, opacity: 1, duration: 0.8})

    lazyVpTitle3.to(".lazy-vp-title3", {y: -30, opacity: 1, duration: 0.8})

    lazyVpHeading3.to(".lazy-vp-heading3", {y: -30, opacity: 1, duration: 0.8})

    lazyVpBody3.to(".lazy-vp-body3", {y: -30, opacity: 1, duration: 0.8})

    lazyVpPhone3.to(".lazy-vp-phone3", {y: -30, opacity: 1, duration: 0.8})
},
})

//ORIGINAL ENDS



// gsap.to("name-1",
//     y: 400, duration: 2}
//     scrollTrigger:{
//         trigger: ".names",
//         start: "0% center",
//         end: "bottom center",
//         markers: true,
//         pin: "names",
//     }
// })
